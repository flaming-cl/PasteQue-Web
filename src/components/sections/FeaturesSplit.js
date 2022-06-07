import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="title">
                  It is a <b>TODO</b> app
                </div>
                <h3 className="mt-0 mb-12">
                  TODO
                </h3>
                <p className="m-0">
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/add-folder.png')}/>
                    Create a folder named todo <br />
                  </li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/finished.png')}/>
                    Mark a todo card as finished <br /></li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/allwatermelon.png')}/>
                    Use the todo filter in the upper left corner to view your finished todo cards </li>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/todo.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item bg-covered">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="title">
                  It is a <b>Clipboard Manager</b>
                </div>
                <p className="m-0">
                  <h3 className="mt-0 mb-12">
                    CLIPBOARD
                  </h3>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/unfinished.png')}/>
                    Mark a card as finished or unfinished if needed
                  </li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/edit.png')}/>
                    Edit your copied text in the editor mode
                  </li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/folder.png')}/>
                    Send a card to another folder if needed
                  </li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/clone.png')}/>
                    Duplicate a card
                  </li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/pin.png')}/>
                    Pin frequently used cards to the top of the list
                  </li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/trash.png')}/>
                    Trash a card that you do not want anymore
                  </li>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/clipboard.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="title">
                  It is a <b>Markdown Editor</b>
                </div>
                <h3 className="mt-0 mb-12">
                  EDITOR
                  </h3>
                <p className="m-0">
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/coding.png')}/>
                    Set up preferred coding language to view code highlights
                  </li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/preview.png')}/>
                    Show markdown preview if needed
                  </li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/screenshot.png')}/>
                    Screenshot what you've edited as a picture
                  </li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/auto_paste.png')}/>
                    Turn on Auto Paste Mode to aggregate copied texts
                  </li>
                  <li className='flex'>
                    <img className='icon' src={require('./../../assets/images/play.png')}/>
                    Turn on Preview Mode to go through cards
                  </li>
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/editor_example.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
