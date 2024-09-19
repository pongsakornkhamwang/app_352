import { useState } from "react";
import './index.css';

export default function App() {
  const [level, setLevel] = useState(10);

  // ฟังก์ชันสำหรับเพิ่ม level เมื่อคลิกรูปภาพ
  const increaseLevel = () => {
    setLevel(prevLevel => prevLevel + 10); // เพิ่ม level ทีละ 10
  };

  return (
    <>
      <h1>Level {level}</h1>
      
      <div>
        {/* รูปภาพหลักที่ขยายตาม level */}
        <img 
          className="m" 
          src="https://static.thairath.co.th/media/4DQpjUtzLUwmJZZSGobOaoB2l01CJneHJRJAJg0MevRX.jpg" 
          alt="Main" 
          style={{ width: `${level * 10}px` }} // ปรับขนาดรูปตามค่า level
        />
      </div>

      <div>
        {/* รูปภาพย่อย เมื่อคลิกจะเพิ่ม level */}
        <img 
          src="https://www.disthai.com/images/content/original-1696393000736.jpg" 
          alt="แตงโม" 
          style={{ width: "100px", cursor: "pointer" }} 
          onClick={increaseLevel} // เมื่อคลิกจะเพิ่ม level
        />
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15Q78P04pHmhvL0F3qwGJYsIwoHkUpCO3TQ&s" 
          alt="ฟักทอง" 
          style={{ width: "100px", cursor: "pointer" }} 
          onClick={increaseLevel} // เมื่อคลิกจะเพิ่ม level
        />
        <img 
          src="https://www.chokchai.go.th/wp-content/uploads/2022/08/image-photo2-95902.jpg" 
          alt="หญ้า" 
          style={{ width: "100px", cursor: "pointer" }} 
          onClick={increaseLevel} // เมื่อคลิกจะเพิ่ม level
        />
      </div>
    </>
  );
}
