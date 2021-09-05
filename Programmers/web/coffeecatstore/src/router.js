export default function Router(initialRouterMap) {
  this.routerMap = initialRouterMap;

  this.router = () => {
    const hashValue = location.hash.replace("#", "");
    const routeTargets = Object.keys(this.routerMap).filter((key) =>
      hashValue.startsWith(key)
    );
    const hashLen = hashValue.split("/").length;
    const routeVal = routeTargets.find(
      (key) => key.split("/").length === hashLen
    );
    this.routerMap[routeVal] && this.routerMap[routeVal]();
  };

  window.addEventListener("DOMContentLoaded", this.router);
  window.addEventListener("hashchange", this.router);

  this.at = (page) => {
    history.pushState({ page }, null, page);
    this.router(page);
  };
}
