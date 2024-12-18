import "./Scrollup.css";

function Scrollup() {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollup");
    if (this.scrollY >= 500) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <a href="#" className="scrollup">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="currentColor"
        className="bi bi-arrow-up-short scrollup__icon"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
        />
      </svg>
    </a>
  );
}
export default Scrollup;
