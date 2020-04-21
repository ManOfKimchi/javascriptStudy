from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

# 드라이버
driver = webdriver.Chrome('chromedriver')

# url
g_loginUrl = 'https://front.wemakeprice.com/user/login'
g_adviceUrl = 'https://front.wemakeprice.com/user/password/advice'
# g_productUrl = ''
# g_productSwitchUrl = 'https://front.wemakeprice.com/product/960270016'
# g_productSwitchTitleUrl = 'https://front.wemakeprice.com/product/912011697'
# g_productTesthUrl = 'https://front.wemakeprice.com/product/912011697'

# info
# g_id = ''
# g_pw = ''
# g_searchKeyword = "닌텐도 스위치 모여봐요 동물의 숲 에디션 본체"

# 기본값 읽어서 설정
def readConfig():
    f = open("config.txt", "r")    
    configList = f.readlines()
    f.close()

    global g_id
    global g_pw
    global g_productUrl
    g_id = configList[0].replace(" ", "").replace("ID:", "").replace("\n", "")
    g_pw = configList[1].replace(" ", "").replace("PW:", "").replace("\n", "")
    g_productUrl = configList[2].replace(" ", "").replace("PRODUCTPAGE:", "").replace("\n", "")

    return True

# 로그인 기능 수행
def login():
    driver.get(g_loginUrl)
    # id
    idTextField = driver.find_element_by_id('_loginId')
    idTextField.send_keys(g_id)
    
    # pw
    pwTextField = driver.find_element_by_id('_loginPw')
    pwTextField.send_keys(g_pw)
    
    # login button
    loginButton = driver.find_element_by_id('_userLogin')
    loginButton.click()

    # 비밀변호 변경 안내 페이지(optional)
    adviceContainer = _afterLoginWait()
    if adviceContainer != None:
        laterButton = driver.find_element_by_class_name('big_xl')
        laterButton.click()

    return True

# 로그인 버튼 클릭후 페이지 진입 타이밍 제어
def _afterLoginWait():
    delay = 1 # sec
    adviceContainer = None
    while True:
        try:
            adviceContainer = driver.find_element_by_id('_passwordContainer')
            break
        except NoSuchElementException:
            if delay > 3:
                break
            else:
                driver.implicitly_wait(1)
                delay += 1
                continue
    return adviceContainer

def tryBuy():
    # 상품페이지 직접 접근
    driver.get(g_productUrl)
    result = True

    # 재고 확인
    webElementType = webdriver.remote.webelement.WebElement
    try:
        soldOut = driver.find_element_by_class_name('sold_out')
        if soldOut != None and type(soldOut) == webElementType:
            result = False
    except:
        try:
            buyButton = driver.find_element_by_class_name('buy')    
            if buyButton != None and type(buyButton) == webElementType:
                buyButton.click()
                buy()
                result = True
        except:
            result = False

    return result

def buy():
    # 카드 선택 관련 div
    cardSelectDiv = driver.find_element_by_id('divCardSelectList')
    # 농협카드 선택
    cardSelect = cardSelectDiv.find_element_by_id('onSelectCard')
    cardSelect.click()
    cardList = cardSelectDiv.find_elements_by_tag_name('a')
    myCard = next((x for x in cardList if x.text == "NH채움카드"), None)
    myCard.click()
    # 할부개월 선택
    installment = driver.find_element_by_id('installment')
    installment.click()
    insSelect = driver.find_element_by_id('installmentList')    
    insList = insSelect.find_elements_by_tag_name('a')
    myIns = next((x for x in insList if x.text == "일시불"), None)
    myIns.click()
    # 구매 버튼
    payButton = driver.find_element_by_id('btnPaymentSubmit')
    payButton.click()    

def __main__():
    # 설정값 세팅
    readConfig()

    # 로그인 처리
    loginTry = 0
    while True:
        if login() == True:
            break
        elif loginTry > 3:
            break
        else:
            loginTry += 1
            continue
    if loginTry > 3:
        print("로그인이 안되는디요?")
        return

    # 반복
    while True:
        if tryBuy():
            break

    return True


__main__()