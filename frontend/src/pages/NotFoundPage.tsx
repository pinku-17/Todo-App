import styleUtils from '../styles/utils.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className={`${styleUtils.flexCenter}`}>
      <p>Page not found</p>
    </div>
  );
};

export default NotFoundPage;
