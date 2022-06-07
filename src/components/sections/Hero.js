import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className="text-color-primary">PasteQue</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                PasteQue helps to organize your thoughts. You can use it as a Todo/Clipboard Manager/Note Taking <b>MacOS</b> App.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/flaming-cl/PasteQue">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <div className="container-xs">
              <p className="mode-title" data-reveal-delay="400">
                Card List Mode
              </p>
            </div>
            <Image
                className="has-shadow"
                src={require('./../../assets/images/fullscreen-shot.png')}
                alt="Hero"
                width={896}
                height={504} />
            <div className="container-xs">
              <p className="mode-title" data-reveal-delay="400">
                Editor Mode
              </p>
            </div>
            <Image
                className="has-shadow"
                src={require('./../../assets/images/editor.png')}
                alt="Hero"
                width={896}
                height={504} />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
