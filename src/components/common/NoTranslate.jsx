
import PropTypes from 'prop-types';


const NoTranslate = ({ children, as = 'span', className, ...props }) => {
  const Element = as;
  
  return (
    <Element className={className} translate="no" {...props}>
      {children}
    </Element>
  );
};

NoTranslate.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  className: PropTypes.string
};

export default NoTranslate;
