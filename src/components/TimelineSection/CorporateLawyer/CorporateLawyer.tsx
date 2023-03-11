import ThreeDModel from '../../3DModels/3DModel';
import Judge from '../../3DModels/Judge';
import classes from './CorporateLawyer.module.css';

const CorporateLawyer = () => {
  return (
    <div className={classes.corporate}>
      <h3 className={'vertical-timeline-element-title'}>
        Corporate Lawyer at Moshe Kahn Advocates
      </h3>
      <p className={'vertical-timeline-element-subtitle'}>Israel, Tel Aviv</p>
      <p>
        Moshe Kahn Advocates is a specialist business law firm that deal mainly
        in "Corporate Law". As a lawyer I had to manage a full range of legal
        services that encompasses many aspects of business, corporate,
        real-estete, and commercial law, including M&A transactions, and complex
        commercial litigation and dispute resolution proceedings.
      </p>
      <div>
        <ThreeDModel>
          <Judge />
        </ThreeDModel>
      </div>
    </div>
  );
};
export default CorporateLawyer;
