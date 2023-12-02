import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";

const MainFramePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[73px] items-center justify-start mx-auto p-9 sm:px-5 w-full">
        <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-1 sm:flex-col flex-row font-poppins gap-[39px] items-center justify-between w-[34%] md:w-full">
            <div className="flex flex-row gap-[37px] items-center justify-between w-[24%] sm:w-full">
              <Text
                className="md:text-4xl sm:text-[34px] text-[38px] text-deep_orange-200"
                size="txtPoppinsBold38"
              >
                Logo
              </Text>
              <Line className="bg-white-A700 h-9 my-2.5 w-px" />
            </div>
            <div className="flex flex-col font-opensans items-center justify-start w-[70%] sm:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <ul className="flex flex-row sm:hidden items-start justify-between w-full common-row-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-3 items-start justify-start mt-0.5">
                        <Img
                          className="h-5 mt-[3px]"
                          src="images/img_home.svg"
                          alt="home"
                        />
                        <Text
                          className="sm:text-[17.51px] md:text-[19.51px] text-[21.51px] text-deep_orange-200"
                          size="txtOpenSansRomanSemiBold2151"
                        >
                          Explore
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-3 items-center justify-center">
                        <Img
                          className="h-[19px] w-[19px]"
                          src="images/img_edit.svg"
                          alt="user"
                        />
                        <Text
                          className="sm:text-[17.51px] md:text-[19.51px] text-[21.51px] hover:text-deep_orange-200 text-white-A700"
                          size="txtOpenSansRomanSemiBold2151WhiteA700"
                        >
                          Create
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row gap-3 items-end justify-start mb-0.5">
                        <Img
                          className="h-[19px] my-[5px] w-[19px]"
                          src="images/img_airplane.svg"
                          alt="close"
                        />
                        <Text
                          className="sm:text-[17.51px] md:text-[19.51px] text-[21.51px] hover:text-deep_orange-200 text-white-A700"
                          size="txtOpenSansRomanSemiBold2151WhiteA700"
                        >
                          Edit
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Button className="cursor-pointer font-opensans font-semibold h-[47px] mb-1.5 md:ml-[0] ml-[888px] md:mt-0 mt-[3px] rounded-[23px] text-center text-lg w-[182px]">
            Login
          </Button>
        </header>
        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-start max-w-[1620px] mx-auto md:px-5 w-full">
          <div className="bg-gray-900 flex md:flex-1 flex-col items-start justify-start p-[29px] sm:px-5 rounded-[10px] w-[33%] md:w-full">
            <div className="flex flex-col items-start justify-start ml-2.5 md:ml-[0] w-[96%] md:w-full">
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700_99"
                size="txtPoppinsRegular26"
              >
                ALL YOUR CHATS
              </Text>
              <div className="bg-deep_orange-200 flex flex-row font-opensans gap-2.5 h-[55px] md:h-auto items-center justify-center mt-[19px] p-2.5 rounded-[10px] w-[440px] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_user.svg"
                  alt="black"
                />
                <Text
                  className="text-black-900 text-lg w-auto"
                  size="txtOpenSansRomanSemiBold18"
                >
                  Chat Images: ON
                </Text>
              </div>
              <Text
                className="leading-[140.00%] mt-5 text-lg text-white-A700_99 w-[97%] sm:w-full"
                size="txtPoppinsRegular18"
              >
                When a bot sends you images, you will be charged one secondary
                image
              </Text>
              <List
                className="flex flex-col font-opensans gap-4 items-center mt-[29px] w-full"
                orientation="vertical"
              >
                <div className="bg-blue_gray-900 flex flex-1 flex-col items-center justify-start pl-1 py-1 rounded-[27px] w-full">
                  <div className="flex flex-col items-center justify-start w-[434px] sm:w-full">
                    <div className="flex flex-row gap-3 items-center justify-center w-auto">
                      <div className="flex flex-col h-[42px] items-center justify-start w-[42px]">
                        <Img
                          className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                          src="images/img_ellipse14.png"
                          alt="ellipseFourteen"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <div className="flex flex-col items-center justify-center w-auto">
                          <Text
                            className="text-base text-white-A700_a2 w-auto"
                            size="txtOpenSansRomanSemiBold16"
                          >
                            Caressa Jessalin
                          </Text>
                        </div>
                        <div className="flex flex-col font-poppins items-center justify-center w-auto">
                          <Text
                            className="text-gray-600 text-sm w-auto"
                            size="txtPoppinsRegular14"
                          >
                            Lorem ipsum dolor sit am...
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col items-center justify-start w-[434px] sm:w-full">
                  <div className="flex flex-row gap-3 items-center justify-center w-auto">
                    <div className="h-[42px] relative w-[42px]">
                      <Img
                        className="h-[42px] m-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse14_42x42.png"
                        alt="ellipseFourteen"
                      />
                      <Img
                        className="absolute h-[42px] inset-[0] justify-center m-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse14.png"
                        alt="ellipseFifteen"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-center justify-center w-auto">
                        <Text
                          className="text-base text-white-A700_a2 w-auto"
                          size="txtOpenSansRomanSemiBold16"
                        >
                          Letty Bride
                        </Text>
                      </div>
                      <div className="flex flex-col font-poppins items-center justify-center w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtPoppinsRegular14"
                        >
                          Lorem ipsum dolor sit am...
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <Line className="bg-gray-800 h-px ml-2.5 md:ml-[0] mt-[30px] w-[96%]" />
            <div className="flex flex-row gap-4 items-start justify-start mb-[597px] ml-2.5 md:ml-[0] mt-[25px] w-[47%] md:w-full">
              <Img
                className="h-[30px] mt-[3px] w-[30px]"
                src="images/img_search.svg"
                alt="search"
              />
              <Text
                className="text-[22px] sm:text-lg text-white-A700_a2 md:text-xl"
                size="txtPoppinsRegular22"
              >
                Create new bot
              </Text>
            </div>
          </div>
          <div className="bg-gray-900 flex md:flex-1 flex-col font-opensans md:gap-10 gap-[472px] items-center justify-start pb-[30px] rounded-[10px] w-[67%] md:w-full">
            <div className="bg-blue_gray-900 flex flex-row md:gap-10 items-center justify-between p-4 rounded-tl-[10px] rounded-tr-[10px] w-full">
              <div className="flex flex-row gap-4 items-center justify-start ml-[15px] w-auto">
                <div className="flex flex-col h-[42px] items-center justify-start w-[42px]">
                  <Img
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    src="images/img_ellipse14.png"
                    alt="ellipseFourteen"
                  />
                </div>
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtOpenSansRomanSemiBold14"
                >
                  Caressa Jessalin
                </Text>
              </div>
              <div className="flex flex-row font-poppins gap-[15px] items-center justify-center mr-[9px] w-[19%]">
                <div className="flex flex-row gap-3 items-start justify-start w-[43%]">
                  <Img
                    className="h-6 mt-0.5 w-6"
                    src="images/img_arrowleft1traced.svg"
                    alt="arrowleft1trace"
                  />
                  <Text
                    className="text-lg text-white-A700"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    Back
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-1/2">
                  <Img
                    className="h-6 mt-0.5 w-6"
                    src="images/img_trashbin1traced.svg"
                    alt="trashbin1traced"
                  />
                  <Text
                    className="text-lg text-white-A700"
                    size="txtPoppinsRegular18WhiteA700"
                  >
                    Delete{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-poppins gap-[30px] items-center justify-start w-[95%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[49px] items-start justify-start w-full">
                  <div className="flex flex-col gap-[29px] justify-start w-full">
                    <div className="flex flex-col gap-3 justify-start md:ml-[0] ml-[603px] w-[41%] md:w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-end md:ml-[0] ml-[291px] w-[29%] md:w-full">
                        <Button
                          className="cursor-pointer min-w-[59px] text-center text-sm"
                          shape="round"
                        >
                          Hello!
                        </Button>
                        <Img
                          className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                          src="images/img_ellipse15.png"
                          alt="ellipseFifteen"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start mr-[58px] w-auto">
                        <div className="bg-deep_orange-200 flex flex-col items-center justify-center p-2.5 rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] w-[349px]">
                          <Text
                            className="leading-[150.00%] max-w-[319px] md:max-w-full text-black-900 text-sm"
                            size="txtPoppinsRegular14Black900"
                          >
                            Yes, my order according to application. Thank you
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[681px] mr-[329px] w-full">
                      <Img
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse14.png"
                        alt="ellipseFifteen_One"
                      />
                      <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[623px] md:w-full">
                        <div className="flex flex-col items-center justify-start w-[623px] md:w-full">
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Button
                              className="cursor-pointer min-w-[73px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] text-center text-sm"
                              color="blue_gray_900"
                            >
                              Hello!👋
                            </Button>
                          </div>
                        </div>
                        <div className="bg-blue_gray-900 flex flex-col items-center justify-center p-2.5 rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] w-auto">
                          <Text
                            className="text-sm text-white-A700 w-auto"
                            size="txtPoppinsRegular14WhiteA700"
                          >
                            Your order according to application yes?
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[823px] w-[19%] md:w-full">
                    <div className="flex flex-row gap-3 items-center justify-between w-full">
                      <Button
                        className="cursor-pointer min-w-[132px] text-center text-sm"
                        shape="round"
                      >
                        Are you Therese{" "}
                      </Button>
                      <Img
                        className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                        src="images/img_ellipse15.png"
                        alt="ellipseFifteen_Two"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-[22%] md:w-full">
                    <Img
                      className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                      src="images/img_ellipse14.png"
                      alt="ellipseSixteen"
                    />
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="bg-blue_gray-900 flex flex-col items-center justify-center p-2.5 rounded-br-[12px] rounded-tl-[12px] rounded-tr-[12px] w-auto">
                        <Text
                          className="text-sm text-white-A700 w-auto"
                          size="txtPoppinsRegular14WhiteA700"
                        >
                          How can I help You?
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                <Input
                  name="frame427321128"
                  placeholder="Message..."
                  className="p-0 placeholder:text-gray-600 text-base text-left w-full"
                  wrapClassName="md:flex-1 md:w-full"
                ></Input>
                <Button
                  className="flex h-[50px] items-center justify-center w-[50px]"
                  shape="circle"
                  size="sm"
                >
                  <Img
                    className="h-5"
                    src="images/img_lightbulb.svg"
                    alt="user_One"
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1619px] mb-[46px] mx-auto md:px-5 w-full">
          <Text
            className="md:text-4xl sm:text-[34px] text-[38px] text-deep_orange-200"
            size="txtPoppinsBold38"
          >
            Logo
          </Text>
          <div className="flex sm:flex-1 flex-row gap-[19px] items-start justify-between w-[24%] sm:w-full">
            <div className="flex flex-col items-center justify-start mt-1">
              <Text
                className="text-lg text-white-A700"
                size="txtPoppinsRegular18WhiteA700"
              >
                Contact@00000000.tech
              </Text>
            </div>
            <Img
              className="h-8"
              src="images/img_group143726566.svg"
              alt="group143726566"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainFramePage;
