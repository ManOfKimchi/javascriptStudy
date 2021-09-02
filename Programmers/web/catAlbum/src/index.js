// initialize

// 초기 경로
// 데이터 로드

function setLoading(loading) {
  const loadMask = document.querySelector(".Loading");
  if (loading) {
    loadMask.classList.add("Modal");
  } else {
    loadMask.classList.remove("Modal");
  }
}
function setImg(src) {
  const imgViewer = document.querySelector(".ImageViewer");
  const img = imgViewer.querySelector("img");
  if (src) {
    imgViewer.classList.add("Modal");
    img.src = src;
  } else {
    imgViewer.classList.remove("Modal");
    img.src = "";
  }
}

const getLists = async (id) => {
  const idQuery = id && id.length ? `/${id}` : "";
  const API = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";
  let data = [];
  setLoading(true);
  await fetch(`${API}${idQuery}`, { method: "GET" })
    .then((res) => res.json())
    .then((d) => {
      data = d;
    })
    .catch((e) => {
      console.log(e, "API 조회 실패: ", id);
    });
  setLoading(false);
  return data;
};

const setNav = function (path) {
  const nav = document.querySelector(".Breadcrumb");
  // <div>path</div> 붙이기
  // 해당 폴더 id 로 draw 할 수 있도록 이벤트처리
};

const drawItems = function (items, parent) {
  const Nodes = document.querySelector(".Nodes");
  Nodes.textContent = "";

  // prev
  if (parent) {
    const prev = document.createElement("div");
    prev.classList.add("Node");
    const img = document.createElement("img");
    img.src = "./assets/prev.png";
    prev.addEventListener("click", async () => {
      const parentItems = await getLists(parent.parent?.id);
      drawItems(parentItems, parent.parent);
    });
    prev.appendChild(img);
    Nodes.appendChild(prev);
  }

  // item
  items.forEach((item) => {
    const isFolder = item.type === "DIRECTORY";
    const itemEl = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("div");
    name.innerText = item.name;

    if (isFolder) {
      img.src = "./assets/directory.png";
      itemEl.addEventListener("click", async () => {
        const childItems = await getLists(item.id);
        drawItems(childItems, item);
        setNav(item.name);
      });
    } else {
      img.src = "./assets/file.png";
      itemEl.addEventListener("click", () => {
        setImg(
          `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public${item.filePath}`
        );
      });
    }

    itemEl.appendChild(img);
    itemEl.appendChild(name);
    Nodes.appendChild(itemEl);
  });
};

async function main() {
  // 초기 데이터 로드
  const rootItems = await getLists();

  const imgViewer = document.querySelector(".ImageViewer");
  imgViewer.addEventListener("click", (e) => {
    if (e.target.nodeName !== "IMG") {
      imgViewer.classList.remove("Modal");
      const img = imgViewer.querySelector("img");
      img.src = "";
    }
  });
  window.onkeydown = (e) => {
    if (e.keyCode === 27) {
      e.preventDefault();
      imgViewer.classList.remove("Modal");
      const img = imgViewer.querySelector("img");
      img.src = "";
    }
  };

  // 그리기
  drawItems(rootItems);
}

main();
