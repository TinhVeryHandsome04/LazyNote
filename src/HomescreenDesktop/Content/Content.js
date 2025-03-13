import "./Content.css";
import Image from "../../images/image-1.png";
import img1  from "../../images/1.png";
import img2  from "../../images/2.png";
import img3  from "../../images/3.png";
import img4  from "../../images/4.png";
import img5  from "../../images/5.png";
function Content() {
  return (
    <div>
      <div className="hero">
        <div className="frame">
          <div className="title">
              Quản lý chi tiêu thông minh <br />
              Kiểm soát tài chính dễ dàng
          </div>
          <div className="sub-title">
            <span>
              <span className="sub-title-1">
                Bạn có lo lắng về chi tiêu hàng tháng? Hãy để 
              </span>
              <span className="sub-title-2"> LAZYNOTE </span>
              <span className="sub-title-3">
                giúp bạn quản lý tài chính hiệu quả hơn!
              </span>
            </span>
          </div>
          <div className="button">
            <a href=""/*<--đưa đường dẫn vào*/>
              <div className="register">Đăng ký</div> 
            </a>
          </div>
        </div>  
        <div className="image-1">
          <img src={Image} alt="image-1"></img>
        </div> 
      </div>
      <div className="feature">
        <div className="feature-img">
          <img src={img1} alt="feature-1"></img>
          <img src={img2} alt="feature-2"></img>
          <img src={img3} alt="feature-3"></img>
          <img src={img4} alt="feature-4"></img>
          <img src={img5} alt="feature-5"></img>
        </div>
      </div>
    </div>
  );
}
export default Content;