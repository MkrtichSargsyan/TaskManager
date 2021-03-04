import homepage from './pages/homepage/homepage';

const homepageContent = document.getElementById('homepage-content');
const goalspageContent = document.getElementById('goalpage-content');

class Router {
  renderPage =(path) => {
    switch (path) {
      case '':
        homepage();
        homepageContent.classList.remove('hidden');
        goalspageContent.classList.add('hidden');
        break;
      case '#goal':
        homepageContent.classList.add('hidden');
        goalspageContent.classList.remove('hidden');
        break;
      default:
        homepageContent.classList.remove('hidden');
        goalspageContent.classList.add('hidden');
    }
  }
}

const router = new Router();

export default router;
