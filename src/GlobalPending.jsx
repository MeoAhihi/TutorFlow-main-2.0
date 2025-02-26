import TutorFlowIcon from "/assets/tutorflow-icon.png";
export default function GlobalPending() {
  return (
    <>
      <div>
        <img src={TutorFlowIcon} className="logo react" alt="TutorFlow logo" />
      </div>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      <h1>TutorFlow</h1>
    </>
  );
}
