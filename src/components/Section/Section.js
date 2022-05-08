import React from "react";
import Button from "../Button/Button";
import Search from "../SearchBar/SearchBar";

import {
  Section as SectionWrapper,
  Inner,
  ActionText,
  Heading,
  Title,
} from "./SectionStyle";

const Section = ({
  isTestimonials,
  actionText,
  title,
  isHeadingVisible = true,
  children,
  buttonProps,
  SearchBar,
}) => {
  return (
    <SectionWrapper isTestimonials={isTestimonials}>
      <Inner>
        {actionText && <ActionText>{actionText}</ActionText>}
        {isHeadingVisible && (
          <Heading>
            {title && <Title>{title}</Title>}
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
