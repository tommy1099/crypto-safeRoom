// import { Link } from "react-router-dom";
interface Props {
  style: string;
}
const ContactForm = ({ style }: Props) => {
  return (
    <div className={style}>
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="subject"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Messege</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-patternColors-green text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
