import { useRef, useState } from "react";

const Otp = () => {
  const OTP_LENGTH = 6;
  const [otp, setOtp] = useState(
    Array(OTP_LENGTH).fill("")
  );
  const inputRefs = useRef([]);

  const handleOtpChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
    if (index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (0 < index < OTP_LENGTH - 1) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1].focus();
        e.preventDefault();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex gap-2 mb-2">
        {otp.map((digit, index) => (
          <input
            maxLength={1}
            className="border h-12 w-12 rounded border-gray-200 text-center"
            ref={(el) => (inputRefs.current[index] = el)}
            value={otp[index]}
            onChange={(e) => handleOtpChange(e, index)}
            inputMode="numeric"
            key={index}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      <button
        className="bg-black text-white p-2 rounded disabled:opacity-50"
        disabled={otp.some((val) => val === "")}
        onClick={() => {
          console.log(otp);
        }}
      >
        Verify
      </button>
    </div>
  );
};

export default Otp;
