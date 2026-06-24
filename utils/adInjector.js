import React from 'react';

export const renderContentWithAds = (htmlContent, AdComponent) => {
  const paragraphs = htmlContent.split('</p>');
  return paragraphs.map((paragraph, index) => {
    const pWithTag = paragraph + '</p>';
    const shouldShowAd = (index + 1) % 3 === 0 && index !== paragraphs.length - 1;
    return (
      <React.Fragment key={index}>
        <div dangerouslySetInnerHTML={{ __html: pWithTag }} />
        {shouldShowAd && <div className="my-8"><AdComponent /></div>}
      </React.Fragment>
    );
  });
};