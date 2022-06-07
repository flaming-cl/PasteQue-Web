import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container shortcuts">
        <hr className='shortcuts-hr'/>
        <h4 className='title'>Keyboard Short Cuts</h4>
        <div className="flex">
          <span>⌘ + D</span>
          <img className='icon' src={require('./../../assets/images/clone.png')} />
          <p className="m-0 text-sm">Duplicate selected card</p>
        </div>

        <div className="flex">
          <span>⌘ + N</span>
          <img className='icon' src={require('./../../assets/images/plus.png')} />
          <p className="m-0 text-sm">Create a new card</p>
        </div>

        <div className="flex">
          <span>⌘ + F </span>
          <img className='icon' src={require('./../../assets/images/search.png')} />
          <p className="m-0 text-sm">Search for cards</p>
        </div>

        <div className="flex">
          <span>⌘ + →</span>
          <img className='icon' src={require('./../../assets/images/next.png')} />
          <p className="m-0 text-sm">Go to next card 「Preview Mode」</p>
        </div>

        <div className="flex">
          <span>⌘ + ←</span>
          <img className='icon' src={require('./../../assets/images/back.png')} />
          <p className="m-0 text-sm">Go to previous card 「Preview Mode」</p>
        </div>

        <div className="flex">
          <span>⌘ + 1~9：</span>
          <p className="m-0 text-sm">Paste one of the top 9 clipboard cards 「Editor Mode」</p>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
