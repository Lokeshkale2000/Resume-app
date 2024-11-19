import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/home/Header";
import Home from "./Components/home/Home";
import Login from "./Components/home/Login";
import Signup from "./Components/home/Signup";
import Resume from "./Components/home/Resume";
import ForgotPassword from "./Components/home/ForgotPassword";
import OtpVerification from "./Components/home/OtpVerification";
import ResumeFile from "./Components/home/ResumeFile";
import FAQ from "./Components/home/FAQ";
import ZetyFile from "./Components/home/ZetyFile";
import Createresume from "./Components/home/Createresume";
//import Footer from "./Components/Footer";
import PrivacySettings from "./Components/pages/Account Setting/Privacy Setting/Privacy";
//import Slidenavbar from './Sildenavbar/Slidenavbar';
import GeneralAccountSettings from "./Components/pages/Account Setting/General Account/General";
//import Subscription from "./Components/pages/Account Setting/Subscription/Subscription";
//import CommunicationPreferences from "./Components/pages/Account Setting/Communication/Communication";
import ContactForm from "./Components/coverletter/ContactForm";
import RecipientForm from "./Components/coverletter/RecipientForm";
import Subject from "./Components/coverletter/Subject";
import Letterbody from "./Components/coverletter/Letterbody";
import Opening from "./Components/coverletter/Opening";
import Conclusion from "./Components/coverletter/Conclusion";
import TemplateManager from "./Components/pages/templateManages/TemplateManager";
import TemplateDetails1 from "./Components/coverlettercomponent/CoverletterTemp1";
import TemplateDetails2 from "./Components/coverlettercomponent/CoverletterTemp2";
import TemplateDetails3 from "./Components/coverlettercomponent/CoverletterTemp3";
import TemplateDetails4 from "./Components/coverlettercomponent/CoverletterTemp4";
import Upload from "./Components/pages/Upload/Upload";
import PaymentUi from "./Components/pages/Payment/PaymentUi/PaymentUi";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import StudentPage from "./pages/StudentPage";
import EducationPage from "./pages/EducationPage";
import TemplatePage from "./pages/TemplatePage";
import SelectResumePage from "./pages/SelectResumePage";
import UploadResumePage from "./pages/UploadResumePage";
import ResumeBuilder from "./resume/ResumeBuilder";
import Pricing from "./Components/home/Pricing";
import Slidenavbar from "./Components/pages/Account Setting/Sildenavbar/Slidenavbar";

function App() {
  const location = useLocation(); // Get the current route path

  // Add '/forgot-password' to the list of routes where Header is hidden
  const hideHeaderRoutes = ["/login", "/signup", "/resume", "/forgot-password"];

  return (
    <>
      {/* Conditionally render Header based on the current path */}
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/resumefile" element={<ResumeFile />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/zety" element={<ZetyFile />} />
        <Route path="/create-resume" element={<Createresume />} />
        <Route
          path="/account-settings/general"
          element={<GeneralAccountSettings />}
        />
       
        <Route path="/account-settings/privacy" element={<PrivacySettings />} />
        <Route path="/cover-letter" element={<ContactForm />} />
        <Route path="/recipient-form" element={<RecipientForm />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/letterbody-page" element={<Letterbody />} />
        <Route path="/opening-page" element={<Opening />} />

        <Route path="/closing-page" element={<Conclusion />} />
        <Route path="/payment" element={<PaymentUi />} />
        <Route path="/tempmanager" element={<TemplateManager />}></Route>
        <Route path="/template/1" element={<TemplateDetails1 />} />
        <Route path="/template/2" element={<TemplateDetails2 />} />
        <Route path="/template/3" element={<TemplateDetails3 />} />
        <Route path="/template/4" element={<TemplateDetails4 />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/templates" element={<TemplatePage />} />
        <Route path="/select-resume" element={<SelectResumePage />} />
        <Route path="/upload-resume" element={<UploadResumePage />} />
        <Route path="/resume-editing" element={<ResumeBuilder />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/sidenavbr" element={<Slidenavbar/>} />
      </Routes>
    </>
  );
}

export default App;
