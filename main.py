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
g_productSwitchUrl = 'https://front.wemakeprice.com/product/960270016'
g_productSwitchTitleUrl = 'https://front.wemakeprice.com/product/920492625'
# info
g_id = 'kjt5974'
g_pw = '312459wlsxo'
g_searchKeyword = "닌텐도 스위치 모여봐요 동물의 숲 에디션 본체"

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

def __main__():
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

    # 상품 검색
    # searchTextField = driver.find_element_by_id('_searchKeyword')
    # searchTextField.send_keys(g_searchKeyword)
    # searchButton = driver.find_element_by_id('_searchKeywordBtn')
    # searchButton.click()

    # 상품페이지 직접 접근
    driver.get(g_productSwitchUrl)

    # 재고 확인
    soldOut = driver.find_elements_by_class_name('sold_out')
    if soldOut

    return True
    # 

__main__()