import styled from "styled-components";

import { Button } from "../base-components/Button";

import addIcon from "./img/add_icon.svg";
import flag_gb from "./img/GB.png";

const SwitchContainer = styled.div`
  position: relative;
  max-width: 100%;
  padding: 32px 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  font-family: Verdana, sans-serif;
`;

const LangButton = styled(Button)`
  width: 21px;
  height: 14px;
  margin-right: 5px;

  &:after {
    background-image: url(${flag_gb});
    background-size: 100%;
  }
`;

const LangSign = styled.span`
  font-size: 14px;
`;

const TrackerLayout = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 100%;
  height: 100%;
  margin-bottom: 8px;
  display: flex;
  background-color: #eaeaea;
  flex-flow: row nowrap;
  justify-content: flex-start;
  font-family: Verdana, sans-serif;
`;

const DetailContainer = styled.div`
  position: relative;
  width: 60%;
  padding: 48px 32px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
`;

const MasterContainer = styled.div`
  position: relative;
  width: 40%;
  padding: 16px 8px;
  background-color: #dddddd;
`;

const AddButtonContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
  top: 0px;
  right: 0px;
  width: 100%;
  min-height: 30px;
  height: auto;
`;

const AddButton = styled(Button)`
  position: absolute;
  top: 0px;
  right: 0px;
  border: 1px solid white;

  &:after {
    background-image: url(${addIcon});
    background-size: 130%;
  }
`;

export {
  TrackerLayout,
  MasterContainer,
  DetailContainer,
  AddButtonContainer,
  AddButton,
  SwitchContainer,
  LangButton,
  LangSign
};
