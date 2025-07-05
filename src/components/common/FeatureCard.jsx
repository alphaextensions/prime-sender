import '../../styles/common/featureCard.css'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

const FeatureCard = ({imgSrc, index}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="feature-card">
        <div className="feature-card-head">
          <div className="feature-img">
            <img src={imgSrc} alt={`${t('features.items.' + index + '.name')} icon`}/>
          </div>
          <div className="feature-name sub-heading">
            {t('features.items.' + index + '.name')}
          </div>
        </div>
        <div className="feature-desc text">
          {t('features.items.' + index + '.desc')}
        </div>
      </div>
    </>
  )
}

FeatureCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default FeatureCard
