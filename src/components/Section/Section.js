import React from "react";
import Button from "../Button/Button";
import Search from "../SearchBar/SearchBar";

import {
  Section as SectionWrapper,
  Inner,
  ActionText,
  Heading,
  SectionTitleH1,
  SectionTitleH2,
} from "./SectionStyle";

const Section = ({
  isTestimonials,
  actionText,
  title,
  isHeadingVisible = true,
  children,
  buttonProps,
  SearchBar,
  isMainSection = false,
  isCentered = false,
}) => {
  return (
    <SectionWrapper isTestimonials={isTestimonials}>
      <Inner>
        {actionText && <ActionText>{actionText}</ActionText>}
        {isHeadingVisible && (
          <Heading>
            {title &&
              (isMainSection ? (
                <SectionTitleH1 isCentered={isCentered}>{title}</SectionTitleH1>
              ) : (
                <SectionTitleH2 isCentered={isCentered}>{title}</SectionTitleH2>
              ))}
            {SearchBar && <Search>{SearchBar}</Search>}
            {buttonProps && (
              <Button
                onClick={buttonProps.buttonClickHandler}
                buttonStyle={buttonProps.buttonStyle}
              >
                {buttonProps.buttonText}
              </Button>
            )}
          </Heading>
        )}
        {children}
      </Inner>
    </SectionWrapper>
  );
};

export default Section;
