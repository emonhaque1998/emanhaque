import * as motion from "motion/react-client";
import { ButtonOneMotionWrapper } from "./ButtonMotionWrapper/ButtonOneMotionWrapper";
import { ButtonTwoMotionWrapper } from "./ButtonMotionWrapper/ButtonTwoMotionWrapper";

export default function Button({
  classProperty,
  children,
  text,
  outLine,
}: {
  classProperty?: string;
  children?: React.ReactNode;
  text: string;
  outLine?: boolean;
}) {
  return (
    <>
      {outLine ? (
       <ButtonOneMotionWrapper classProperty={classProperty}>
          {text} {children}
        </ButtonOneMotionWrapper>
      ) : (
        <ButtonTwoMotionWrapper classProperty={classProperty}>
          {text} {children}
        </ButtonTwoMotionWrapper>
      )}
    </>
  );
}
