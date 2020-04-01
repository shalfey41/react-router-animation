import { gsap } from "gsap";

export const hideNextPage = (page) => {
  isCompleteMinTimeout = false;
  nextPageNode = page;

  if (nextPageNode) {
    nextPageNode.style.display = 'none';
  }
};
export const showLoader = () => {
  wrapper = document.createElement('div');
  wrapper.classList.add('Wrapper');
  document.body.appendChild(wrapper);

  gsap.from('.Wrapper', { x: '100%', duration: 0.5, onComplete: () => {
      setTimeout(() => {
        isCompleteMinTimeout = true;
        showPage();
      }, 300);
    } });
};

export const onReadyNewRoute = () => {
  canShowNewPage = true;
  showPage();
};

let canShowNewPage = false;
let isCompleteMinTimeout = false;
let nextPageNode = null;
let wrapper = null;

const reset = () => {
  canShowNewPage = false;
  isCompleteMinTimeout = false;
  nextPageNode = null;

  if (wrapper) {
    document.body.removeChild(wrapper);
  }

  wrapper = null;
};

const showPage = () => {
  if (nextPageNode && isCompleteMinTimeout && canShowNewPage) {
    nextPageNode.style.display = 'block';

    gsap.to('.Wrapper', { x: '-100%', duration: 0.5, onComplete: reset });
  }
};
