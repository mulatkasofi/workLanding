import CostAndTermsPage from '../pages/CostAndTermsPage/CostAndTermsPage';
import FAQPage from '../pages/FAQPage/FAQPage';
import Footer from '../pages/Footer/Footer';
import PreviewPage from '../pages/PreviewPage/PreviewPage';
import PrinciplesPage from '../pages/PrinciplesPage/PrinciplesPage';
import ReviewsPage from '../pages/ReviewsPage/ReviewsPage';
import WorkPage from '../pages/WorkPage/WorkPage';
import WorkStepsPage from '../pages/WorkStepsPage/WorkStepsPage';

const Home = () => (
  <div className="background">
    <div id="preview">
      <PreviewPage />
    </div>
    <div id="work">
      <WorkPage />
    </div>
    <div id="work-steps">
      <WorkStepsPage />
    </div>
    <div id="reviews">
      <ReviewsPage />
    </div>
    <div id="principles">
      <PrinciplesPage />
    </div>
    <div id="cost-and-terms">
      <CostAndTermsPage />
    </div>
    <div id="faq">
      <FAQPage />
    </div>
    <Footer />
  </div>
);

export default Home;
