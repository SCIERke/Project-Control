import React ,{useRef}from "react";
import './index.css';
import 'animate.css';

import { AlertFilled , CheckCircleOutlined , ScheduleFilled ,ReconciliationFilled ,ProductFilled ,SearchOutlined ,HomeFilled ,DownOutlined } from '@ant-design/icons';

import { Helmet } from 'react-helmet';



function App() {
  // Introduction
  const projectTitleRef = useRef(null);
  const demoBadgeRef = useRef(null);

  const slideIntroduction = useRef(null)
  const manageTitle = useRef(null)
  const underlineRight = useRef(null)
  const underlineLeft = useRef(null)
  const inFewTitle = useRef(null)

  const toTrackData = useRef(null)

  // Policy and Plans
  const titlePlanDetail = useRef(null)
  const planDetail = useRef(null)
  const policyDetail = useRef(null)
  const planLogo = useRef(null)
  const underlinePolicyRight = useRef(null)
  const underlinePolicyLeft = useRef(null)
  const policyAdvancedDetail = useRef(null)

  // Learn
  const learnTitleDetail = useRef(null)
  const learnDetailLogo = useRef(null)
  const learnDetailDetail = useRef(null)
  const pictureLearn = useRef(null)
  const learnDetailPicture = useRef(null)

  //Demo
  const demoDetail = useRef(null)


  const moveToIntroduction = () => {
    window.location.href = "#Introduction";


    if (projectTitleRef.current) {
      projectTitleRef.current.classList.remove("animate__backInLeft");
      void projectTitleRef.current.offsetWidth; 
      projectTitleRef.current.classList.add("animate__backInLeft");
    }
    
    if (demoBadgeRef.current) {
      demoBadgeRef.current.classList.remove("animate__backInLeft");
      void demoBadgeRef.current.offsetWidth; 
      demoBadgeRef.current.classList.add("animate__backInLeft");
    }
    if (slideIntroduction.current) {
      slideIntroduction.current.classList.remove("animate__fadeInLeft");
      void slideIntroduction.current.offsetWidth; 
      slideIntroduction.current.classList.add("animate__fadeInLeft");
    }
    if (manageTitle.current) {
      manageTitle.current.classList.remove("animate__zoomIn");
      void manageTitle.current.offsetWidth; 
      manageTitle.current.classList.add("animate__zoomIn");
    }
    if (underlineRight.current) {
      underlineRight.current.classList.remove("animate__fadeInRightBig");
      void underlineRight.current.offsetWidth; 
      underlineRight.current.classList.add("animate__fadeInRightBig");
    }
    if (underlineLeft.current) {
      underlineLeft.current.classList.remove("animate__fadeInLeftBig");
      void underlineLeft.current.offsetWidth; 
      underlineLeft.current.classList.add("animate__fadeInLeftBig");
    }
    if (inFewTitle.current) {
      inFewTitle.current.classList.remove("animate__zoomIn");
      void inFewTitle.current.offsetWidth; 
      inFewTitle.current.classList.add("animate__zoomIn");
    }
    if (toTrackData.current) {
      toTrackData.current.classList.remove("animate__tada");
      void toTrackData.current.offsetWidth; 
      toTrackData.current.classList.add("animate__tada");
    }
  };

  const moveToLearn = () => {
    window.location.href = "#Learn";
    if (learnTitleDetail.current) {
      learnTitleDetail.current.classList.remove("animate__zoomIn");
      void learnTitleDetail.current.offsetWidth; 
      learnTitleDetail.current.classList.add("animate__zoomIn");
    }
    if (learnDetailLogo.current) {
      learnDetailLogo.current.classList.remove("animate__zoomIn");
      void learnDetailLogo.current.offsetWidth; 
      learnDetailLogo.current.classList.add("animate__zoomIn");
    }
    if (learnDetailDetail.current) {
      learnDetailDetail.current.classList.remove("animate__zoomIn");
      void learnDetailDetail.current.offsetWidth; 
      learnDetailDetail.current.classList.add("animate__zoomIn");
    }
    if (pictureLearn.current) {
      pictureLearn.current.classList.remove("animate__fadeInDown");
      void pictureLearn.current.offsetWidth; 
      pictureLearn.current.classList.add("animate__fadeInDown");
    }
    if (learnDetailPicture.current) {
      learnDetailPicture.current.classList.remove("animate__fadeInUp");
      void learnDetailPicture.current.offsetWidth; 
      learnDetailPicture.current.classList.add("animate__fadeInUp");
    }
  }
  
  const moveToPlan = () => {
    window.location.href = "#Plans";

    if (titlePlanDetail.current) {
      titlePlanDetail.current.classList.remove("animate__zoomIn");
      void titlePlanDetail.current.offsetWidth; 
      titlePlanDetail.current.classList.add("animate__zoomIn");
    }

    if (planDetail.current) {
      planDetail.current.classList.remove("animate__zoomIn");
      void planDetail.current.offsetWidth; 
      planDetail.current.classList.add("animate__zoomIn");
    }
    if (policyDetail.current) {
      policyDetail.current.classList.remove("animate__zoomIn");
      void policyDetail.current.offsetWidth; 
      policyDetail.current.classList.add("animate__zoomIn");
    }
    if (planLogo.current) {
      planLogo.current.classList.remove("animate__zoomIn");
      void planLogo.current.offsetWidth; 
      planLogo.current.classList.add("animate__zoomIn");
    }
    if (underlinePolicyRight.current) {
      underlinePolicyRight.current.classList.remove("animate__fadeInRightBig");
      void underlinePolicyRight.current.offsetWidth; 
      underlinePolicyRight.current.classList.add("animate__fadeInRightBig");
    }
    if (underlinePolicyLeft.current) {
      underlinePolicyLeft.current.classList.remove("animate__fadeInLeftBig");
      void underlinePolicyLeft.current.offsetWidth; 
      underlinePolicyLeft.current.classList.add("animate__fadeInLeftBig");
    }
    if (policyAdvancedDetail.current) {
      policyAdvancedDetail.current.classList.remove("animate__zoomIn");
      void policyAdvancedDetail.current.offsetWidth; 
      policyAdvancedDetail.current.classList.add("animate__zoomIn");
    }
  }

  const moveToDemo = () => {
    window.location.href = "#Demo";
    if (demoDetail.current) {
      demoDetail.current.classList.remove("animate__fadeInUp");
      void demoDetail.current.offsetWidth; 
      demoDetail.current.classList.add("animate__fadeInUp");
    }
  }

  return (
    <div className="flex flex-col overflow-hidden">
      <Helmet>
        <title>Project Control</title>
      </Helmet>
      <div className="fixed h-16 w-screen bg-slate-900 z-10">
        <div className="flex flex-row items-center h-full w-full py-4 px-8">
          <div className="flex flex-row items-center text-white oswald-medium text-4xl pl-4 blink-on-hover" onClick={moveToIntroduction}>
            <AlertFilled className="logo-blink mr-2"/>
            <h1 className="animate__animated animate__backInLeft mr-4" ref={projectTitleRef} >Project Control</h1>
            <div className="animate__animated animate__backInLeft h-7 px-2 flex items-center rounded-md bg-white w-auto text-slate-900 text-base " ref={demoBadgeRef}>
              <div>Demo</div>
            </div>
          </div>
          <div className="text-2xl text-slate-900 oswald-medium bg-white py-1 px-4 rounded-lg ml-5 bg-opacity-70 hover:bg-opacity-100 cursor-pointer animate__animated animate__tada" ref={toTrackData} onClick={moveToDemo}>Demo UI Track Data</div>
          <div className="absolute top-0 right-0 flex flex-row text-white oswald-regular text-2xl pr-10 h-full  items-center">
            <div 
            className="px-8 h-full flex items-center cursor-pointer hover:text-slate-900 hover:bg-white "
            onClick={moveToLearn}
            >
              Learn
            </div>
            <div 
            className="px-8 mr-8   h-full flex items-center cursor-pointer hover:text-slate-900 hover:bg-white "
            onClick={moveToPlan}
            >
              Plans
            </div>
            
            <div
            className=" animate__animated hover:animate__heartBeat cursor-pointer"
            onMouseEnter={(e) => {
              e.target.classList.remove("animate__heartBeat");
              void e.target.offsetWidth; 
              e.target.classList.add("animate__heartBeat");
            }}
            >
              Sign In
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div id="Introduction" className="flex  h-screen justify-center bg-Introduction pt-16 px-20">
          <div className="flex flex-col justify-center animate__animated animate__fadeInLeft w-full text-white items-center" ref={slideIntroduction}>
            <div className="text-7xl oswald-bold ">Project Control</div>
            <div className="flex justify-start my-4 w-[40%]">
              <div className="flex flex-col oswald-regular  text-4xl">
                <div className="flex flex-row">
                  <div className="flex justify-start animate__animated animate__zoomIn animate__delay-1s w-full" ref={manageTitle}>
                    Manage your data
                  </div>
                  <div className="trapezoid-left mt-4 animate__animated animate__fadeInRightBig animate__delay-3s" ref={underlineRight}/>  
                </div>
                <div className="flex flex-row">
                <div className="trapezoid-right mt-4 animate__animated animate__fadeInLeftBig animate__delay-4s " ref={underlineLeft}/>
                <div className="flex justify-end animate__animated animate__zoomIn animate__delay-2s w-full" ref={inFewTitle}>in just a few clicks!!</div>
                </div>
                
              </div>
            </div>
            <div className="text-xl oswald-thin w-[46%]">
            In a world where our personal information is scattered across the internet, this platform lets you easily manage    what data you’ve shared. With a few clicks, you can review, edit, or remove unwanted information and control how your data appears in online searches, making privacy management simple and effective.
            </div>
            <div className="flex flex-row">
                <div className="mt-4 bg-white text-white mr-12 py-3 oswald-regular px-12 text-2xl bg-opacity-40 hover:bg-opacity-60 transition-opacity duration-400 shadow-lg mx-auto hover:cursor-pointer border-white border-2">
                  <span className="opacity-100">Get Start</span>
                </div>
              
                <div className="mt-4 bg-white text-white  py-3 oswald-regular px-10 text-2xl bg-opacity-40 hover:bg-opacity-60 transition-opacity duration-400 shadow-lg mx-auto hover:cursor-pointer border-white border-2" onClick={moveToPlan}>
                  <span className="opacity-100">View Plans</span>
                </div>
            </div>
          </div>
        </div>
        <div id="Learn" className="flex flex-row w-screen h-screen bg-slate-900 cursor-default ">
          <div className="w-1/4 bg-slate-900 p-7 ">
            <div className="flex flex-row bg-white bg-opacity-50 hover:bg-opacity-60 oswald-regular text-white px-5 text-2xl py-3 rounded-lg cursor-pointer ">
              <SearchOutlined className="mr-5"/>
              <button type="button" className="text-2xl">Quick search... </button>
            </div>
            <div className="text-white oswald-thin  text-3xl cursor-pointer">
              <div className="opacity-70 hover:opacity-100 mt-5 py-2 border-b-2 border-white">
                Who are we?
              </div>
              <div className="opacity-70 hover:opacity-100 mt-2 py-2 border-b-2 border-white">
                How We Operate?
              </div>
              <div className="opacity-70 hover:opacity-100 mt-2 py-2 border-b-2 border-white">
                Our Approach
              </div>
              <div className=" opacity-70 hover:opacity-100 mt-2 py-2 border-b-2 border-white">
                Our Values
              </div>
              <div className=" opacity-70 hover:opacity-100 mt-2 py-2 border-b-2 border-white">
                Looking Ahead
              </div>
            </div>
            <div className="mt-10 text-lg text-white oswald-thin">
              Disclaimer: This is a demo version, so some functions may not work as expected.
            </div>
          </div>
          <div className="flex flex-col  bg-slate-900 w-1/2 overflow-y-auto">
            <div className="flex flex-row items-center w-full bg-slate-900 px-7 py-3 ">
              <div className="text-5xl text-white mr-4 cursor-pointer animate__animated animate__zoomIn" ref={learnDetailLogo}>
                <ProductFilled />
              </div>
              <div className="oswald-bold text-white text-4xl animate__animated animate__zoomIn" ref={learnTitleDetail}>
                Details
              </div>
            </div>
            <div className="p-8 bg-white animate__animated animate__zoomIn" ref={learnDetailDetail}>
              <div className="oswald-medium text-7xl">Who are we?</div>
              <div className="oswald-thin text-xl my-5">
                We are a team dedicated to empowering individuals to understand, manage, and protect their digital presence. Our mission is to provide tools and insights that give you control over your online data, fostering privacy, security, and informed choices in the digital world
              </div>
              <ul className="oswald-thin text-xl list-disc ml-12">
                <li >We empower individuals to understand, manage, and protect their digital presence</li>
                <li className="mt-1">Our mission is to provide tools and insights for greater control over your online data</li>
                <li className="mt-1">We focus on fostering privacy, security, and informed choices in the digital world</li>
              </ul>
              <div className="oswald-medium text-5xl mt-10 ">How We Operate?</div>
              <div className="oswald-thin text-xl mt-5">
              Our platform is built on a foundation of transparency and security. With every interaction, we aim to give you the tools and insights needed to manage your digital data with ease. We constantly refine our systems to ensure they are reliable, intuitive, and effective, adapting to your needs in the rapidly evolving digital landscape.
              </div>
              <div className="oswald-medium text-5xl mt-10">Our Approach</div>
              <div className="oswald-thin text-xl mt-5">
                At the core of our platform is a dedication to empowering users. We understand the complexities of managing digital data across multiple platforms, and our tools are designed to simplify this process. By combining advanced data tracking, real-time alerts, and intuitive design, we ensure that your digital footprint is always within your control.
              </div>
              <div className="oswald-medium text-5xl mt-10">Our Values</div>
              <div className="oswald-thin text-xl mt-5">
                <ul className="list-disc ml-12">
                  <li className="mt-1">**Transparency** – We believe that users should always know how their data is being handled, stored, and protected.</li>
                  <li className="mt-1">**User Empowerment** – Our goal is to provide you with the knowledge and tools needed to confidently manage your online presence.</li>
                  <li className="mt-1">**Privacy First** – Your privacy is our priority. We use best-in-class encryption and secure protocols to protect your information.</li>
                  <li className="mt-1">**Continuous Improvement** – The digital world evolves rapidly, and so do we. We’re always enhancing our platform to better serve your needs.</li>
                </ul>
              </div>
              <div className="oswald-medium text-5xl mt-10">Looking Ahead</div>
              <div className="oswald-thin text-xl mt-5">
                As the landscape of digital privacy continues to change, we’re committed to staying at the forefront of technology to provide the best user experience. We aim to empower individuals with the tools they need not only to protect their data but to make informed decisions about their digital presence. With your trust, we’re shaping a future where digital freedom and security go hand in hand.
              </div>
            </div>
          </div>
          <div className="w-1/4 bg-white " >
            <div className="animate__animated animate__fadeInDown" ref={pictureLearn}>
              <img src="assets/Learn.gif" alt="Learn"/>
            </div>
            <div className="w-full h-full p-4 animate__animated animate__fadeInUp" ref={learnDetailPicture}> 
              <div className="oswald-regular text-xl">🛡️Take Charge of Your Digital Footprint!🛡️</div>
              <div className="oswald-thin text-lg">
                Worried about what traces you’re leaving online? Introducing Project Control—the ultimate tool to track, analyze, and manage your digital footprint like never before!
              </div>
              <div className="oswald-regular text-xl mt-7">🚀 Key Features:</div>
              <div className="oswald-thin text-lg mt-3">
                <ul className="list-disc ml-7">
                  <li className="mt-1">Comprehensive Tracking: Monitor your online activity across multiple platforms</li>
                  <li className="mt-1">Instant Data Adjustments: Make real-time updates to stay in control</li>
                  <li className="mt-1">Advanced Analytics: Get a clear picture of your digital presence with easy-to-understand insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="Plans" className="flex flex-row w-full h-screen bg-slate-900">
          <div className="flex flex-col h-full w-1/3 policy-Background p-4 cursor-default animate__animated animate__zoomIn" ref={policyDetail}>
            <div className="flex policy-Logo justify-center text-white mt-8">
              <ReconciliationFilled />
            </div>
            <div className="text-7xl">
              <div className="flex justify-center oswald-medium text-white items-center">
                <div className="trapezoid-policy-right mt-4 animate__animated animate__fadeInLeftBig animate__delay-1s" ref={underlinePolicyLeft}/>
                <div className="mx-4">Policy</div>
                <div className="trapezoid-policy-left mt-4 animate__animated animate__fadeInRightBig animate__delay-1s" ref={underlinePolicyRight}/>  
              </div>
            </div>
            <ul className="list-disc text-white oswald-regular text-2xl mt-8 ml-4">
              <div className="flex flex-col">
                <li >Data Ownership and Access</li>
                <p className="text-xl oswald-thin ml-2">
                  Users retain full ownership and control over all data they choose to manage on this platform.
                </p>
              </div>
              <div>
                <li className="mt-3">Data Transparency</li>
                <p className="text-xl oswald-thin ml-2">
                  Each user will be provided a clear record of when and where their data has been accessed or modified.
                </p>
              </div>
              <div>
                <li className="mt-3">Deletion and Data Erasure</li>
                <p className="text-xl oswald-thin ml-2">
                  All user data is protected by advanced encryption methods both in transit and at rest to ensure maximum security.
                <div className="mx-7 animate__animated animate__zoomIn">Policy</div>
                </p>
              </div>
            </ul>
          </div>
          <div className="flex flex-col h-full w-2/3 ">
            <div className="flex flex-row items-center h-[10%] w-full bg-slate-900 px-7 ">
              <div className="text-5xl text-white mr-4 cursor-pointer animate__animated animate__zoomIn" ref={planLogo}>
                <ScheduleFilled />
              </div>
              <div className="oswald-bold text-white text-4xl animate__animated animate__zoomIn" ref={titlePlanDetail}>Choose the Plan</div>
            </div>
            <div className="flex flex-row w-full h-[90%] cursor-default  bg-slate-900" >
              <div className="flex flex-col h-full w-1/2  p-4 text-slate-900 bg-white animate__animated animate__zoomIn" ref={planDetail}>
                <div className="flex flex-row w-full items-center">
                  <div className="oswald-regular text-5xl">Standard</div>
                  <div className="oswald-regular text-white bg-slate-900 flex items-center justify-center mt-2 text-xl px-2 ml-3 h-8"> 
                    <div>Recommend</div>
                  </div>
                </div>
                <div className="mt-5 oswald-thin text-xl">
                  This packet is designed for beginners. You’ll be able to track only the basics—simple and straightforward data!
                </div>
                <div className="flex flex-row mt-5">
                  <div className="oswald-regular text-8xl">$5</div>
                  <div className="flex flex-col oswald-thin text-lg p-3">
                    <div>per user / per month</div>
                    <div>billed monthly</div>
                    <div className="oswald-regular text-base">This is a demo app, so the pricing may change in the future.</div>
                  </div>
                </div>
                <div className=" flex w-full oswald-regular text-white justify-center mt-2 mb-4">
                  <div className="bg-slate-900 w-52 text-3xl p-3 text-center cursor-pointer">Get Started</div>
                </div>
                <div className="flex flex-row w-full mt-4">
                  <div className="text-xl mr-4">
                    <CheckCircleOutlined/>
                  </div>
                  <div className="text-lg oswald-thin">Track your data daily</div>
                </div>
                <div className="flex flex-row w-full  mt-4">
                  <div className="text-xl mr-4">
                    <CheckCircleOutlined/>
                  </div>
                  <div className="text-lg oswald-thin">Immediately adjust your data</div>
                </div>
                <div className="flex flex-row w-full mt-4">
                  <div className="text-xl mr-4">
                    <CheckCircleOutlined/>
                  </div>
                  <div className="text-lg oswald-thin">
                    Continuously monitor and verify data to ensure it remains accurate, consistent, and reliable across all systems
                  </div>
                </div>
                <div className="flex flex-row w-full mt-4">
                  <div className="text-xl mr-4">
                    <CheckCircleOutlined/>
                  </div>
                  <div className="text-lg oswald-thin">Stay updated with any data alerts</div>
                </div>
              </div>
              <div className="flex flex-col h-full w-1/2 p-4 border-l-2 border-slate-900 bg-white animate__animated animate__zoomIn " ref={policyAdvancedDetail}>
                <div className="flex flex-row w-full items-center">
                    <div className="oswald-regular text-5xl">Advanced</div>
                  </div>
                  <div className="mt-5 oswald-thin text-xl">
                  This packet is designed for advanced users. You’ll be able to track detailed insights—comprehensive and in-depth data analysis!
                  </div>
                  <div className="flex flex-row mt-5">
                    <div className="oswald-regular text-8xl">$9</div>
                    <div className="flex flex-col oswald-thin text-lg p-3">
                      <div>per user / per month</div>
                      <div>billed monthly</div>
                      <div className="oswald-regular text-base">This is a demo app, so the pricing may change in the future.</div>
                    </div>
                  </div>
                  <div className=" flex w-full oswald-regular text-white justify-center mt-2 mb-4">
                    <div className="bg-slate-900 w-52 text-3xl p-3 text-center cursor-pointer">Get Started</div>
                  </div>
                  <div className="flex flex-row w-full mt-4">
                    <div className="text-xl mr-4">
                      <CheckCircleOutlined/>
                    </div>
                    <div className="text-lg oswald-thin">
                      Maintain a daily log of your digital activities for continuous tracking of your online footprint
                    </div>
                  </div>
                  <div className="flex flex-row w-full  mt-4">
                    <div className="text-xl mr-4">
                      <CheckCircleOutlined/>
                    </div>
                    <div className="text-lg oswald-thin">
                      Promptly update and refine your digital footprint data to reflect any changes and enhance accuracy
                    </div>
                  </div>
                  <div className="flex flex-row w-full mt-4">
                    <div className="text-xl mr-4">
                      <CheckCircleOutlined/>
                    </div>
                    <div className="text-lg oswald-thin">
                    Regularly review and validate your digital footprints to keep information precise and consistent across platforms
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="flex flex-row bg-slate-900 text-2xl text-white p-4 oswald-regular justify-center w-screen">
          <div>Below is an example of how the data will be displayed in website </div>
          <div className="oswald-thin text-lg ml-4 mt-1">( In the actual application, it will be displayed on a different page )</div>
        </div>
        <div id="Demo" className="flex flex-row w-screen h-screen border-t-2 border-slate-900">
          <div className="flex flex-col w-1/4 h-full bg-slate-900 oswald-light p-4 text-white">
            <div className="flex flex-row border-b-2 text-3xl p-2">
              <HomeFilled className="mr-5"/>
              <div className="">Personal Data</div>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                  <div className="text-2xl">Social Media Accounts</div>
                </div>
                <DownOutlined className="mt-1 mr-2"/>
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                  <div className="text-2xl">Email Accounts</div>
                  <div className="mt-1 text-sm ml-4">Can't be used</div>
                </div>
                <DownOutlined className="mt-1 mr-2"/>
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                  <div className="text-2xl">Search Engines</div>
                  <div className="mt-1 text-sm ml-4">Can't be used</div>
                </div>
                <DownOutlined className="mt-1 mr-2"/>
              </div>
            </div>
          </div>
          <div>
            
          </div>
          <div className="flex flex-col w-3/4 h-full bg-white p-5 overflow-y-auto animate__animated animate__fadeInUp" ref={demoDetail}>
            <div className="oswald-regular text-7xl text-slate-900">
              Social Media Accounts
            </div>
            <div className="flex flex-col w-full h-full gap-2 mt-2">
              <div className="w-full bg-slate-100  p-4 rounded-3xl ">
                <div className="flex flex-row items-center">
                  <div className="w-12">
                    <img src="/assets/Facebook_Logo.png"  alt="Facebook Logo"/>
                  </div>
                  <div className="oswald-regular text-4xl text-slate-900 ml-5">Facebook - [Schierke Heh]</div>
                </div>
                <div className="w-full flex flex-row mx-4 mt-4">
                  <div className="flex flex-col w-1/2  border-r-2 border-slate-900">
                    <div className="oswald-light text-3xl">Personal</div>
                    <div className="ml-4 oswald-thin text-xl">
                      <div className="mt-3">Name : Schierke Heh</div>
                      <div className="mt-2">Birth Date : 2 May 2007</div>
                      <div className="text-xl p-1 text-white bg-slate-900 w-32 text-center rounded-3xl mt-2">Search History</div>
                    </div>
                    <div className="oswald-light text-3xl mt-2">Contacts</div>
                    <div className="oswald-thin text-xl w-full p-4 text-white">
                      <div className="flex flex-col rounded-3xl w-auto bg-slate-900 p-3">
                        <div>Email</div>
                        <ul className="list-disc ml-10">
                          <li>prapatsch@gmail.com</li>
                          <li>mheekimoho@gmail.com</li>
                          <li>prapatsche@gmail.com</li>
                        </ul>
                      </div>
                    </div>
                    <div className="oswald-thin text-xl w-full px-4 text-white">
                      <div className="flex flex-col rounded-3xl w-auto bg-slate-900 p-3">
                        <div>Phone</div>
                        <ul className="list-disc ml-10">
                          <li>0972807226</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 px-4 overflow-y-auto h-80">
                    <div className="oswald-light text-3xl">Posts [ Public and Friend ]</div>
                    <div className="ml-4 oswald-thin text-lg">
                      **this is temp data**
                    </div>
                    <div className="w-full bg-white p-2 rounded-3xl mt-2">
                      <div className="flex items-center">
                        <img
                          src="https://via.placeholder.com/40" 
                          alt="User Avatar"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h3 className="font-semibold">John Doe</h3>
                          <p className="text-sm text-gray-500">2 hrs ago</p>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-700">
                        Just had an amazing day at the beach! 🌊☀️ Can’t wait to go back next weekend!
                      </p>

                      <div className="mt-4">
                        <img
                          src="https://via.placeholder.com/300x200"
                          alt="Post Content"
                          className="w-full rounded-md"
                        />
                      </div>

                      <div className="flex justify-between items-center mt-4 text-gray-600">
                        <div className="flex items-center">
                          <span className="material-icons text-blue-500 mr-1">thumb_up</span>
                          <span className="text-sm">45 Likes</span>
                        </div>
                        <div className="text-sm">12 Comments</div>
                      </div>

                      <div className="flex justify-around mt-2 border-t pt-2">
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                          <span className="text-sm">Like</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                          <span className="text-sm">Comment</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                    <div className="w-full bg-white p-2 rounded-3xl mt-2">
                      <div className="flex items-center">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="User Avatar"
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h3 className="font-semibold">Emily Clark</h3>
                          <p className="text-sm text-gray-500">5 hrs ago · 🌍 Traveling</p>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-700">
                        The view from the top of the mountain was absolutely breathtaking! 🏔️✨
                      </p>

                      <div className="mt-4">
                        <img
                          src="https://via.placeholder.com/300x200"
                          alt="Mountain View"
                          className="w-full rounded-md"
                        />
                      </div>

                      <div className="flex justify-between items-center mt-4 text-gray-600">
                        <div className="flex items-center">
                          <span className="material-icons text-blue-500 mr-1">thumb_up</span>
                          <span className="text-sm">92 Likes</span>
                        </div>
                        <div className="text-sm">34 Comments</div>
                      </div>

                      <div className="flex justify-around mt-2 border-t pt-2">
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                          <span className="text-sm">Like</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                          <span className="text-sm">Comment</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full bg-slate-100 h-auto p-4 rounded-3xl">
                <div className="flex flex-row items-center">
                  <div className="w-12">
                    <img src="/assets/Facebook_Logo.png" alt="Facebook Logo" />
                  </div>
                  <div className="oswald-regular text-4xl text-slate-900 ml-5">Facebook - [Schierke Heh]</div>
                </div>
                <div className="text-xl mt-2">
                  <DownOutlined/>
                </div>
              </div>
              <div className="flex justify-between items-center w-full bg-slate-100 h-auto p-4 rounded-3xl">
                <div className="flex flex-row items-center">
                  <div className="w-12">
                    <img src="/assets/Line_Logo.png" alt="Line Logo" />
                  </div>
                  <div className="oswald-regular text-4xl text-slate-900 ml-5">Line - [pxxxxxxxx@gmail.com]</div>
                </div>
                <div className="text-xl mt-2">
                  <DownOutlined/>
                </div>
              </div>
            </div>
          </div>        
        </div>

        <div id="Footer" className="flex flex-row h-40 w-full policy-Background">
          <div className="flex flex-row w-2/5 h-full   p-4">
          <div className="w-20">
            <img src="assets/Logo.png" alt="Logo" className="rounded-2xl" />
          </div>
            <div className="flex flex-col w-5/6 h-full ml-4 justify-center">
              <div className="oswald-regular text-white text-4xl">Mippy Co., Ltd.</div>
              <div className="oswald-light text-xl ml-7 mt-4 text-white">67 xxx xxxxxxxxx xxxxxxx xxxx xxxxxxxxxxx xxxxxxxx 10230</div>
              <div className="oswald-light text-lg text-white ml-7">( cooperation number : 1548899526030228 )</div>
            </div>
          </div>
          <div className="flex flex-row w-3/5 h-full">
            <div className="w-1/2 h-full p-4">
              <div className="oswald-regular text-4xl text-white">Contacts</div>
              <div className="oswald-light text-xl ml-7 mt-4 text-white">Email : peerapatsetsuk15@gmail.com</div>
              <div className="oswald-light text-xl ml-7  text-white">Tel. : 0972807226</div>
            </div>
            <div className="w-1/2 h-full ">
              <div className="oswald-light text-xl ml-7 mt-16 pt-2  text-white">Facebook: Schierke Heh</div>
              <div className="oswald-light text-xl ml-7 text-white">Line: You can add me by my phone no.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
