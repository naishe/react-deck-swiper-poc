import React, { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateAndSet = (eml: string) => {
    const eml1 = eml.trim();
    if (eml.length > 0) {
      if (eml1.indexOf("@") < 0) {
        setError("Wrong Email");
      }
      setEmail(eml1);
    } else if (eml.length < 1) {
      setError("");
    }
  };
  return (
    <div>
      {error.length > 0 && <div style={{ color: "red" }}>{error}</div>}
      <input
        type="email"
        placeholder="email Address"
        value={email}
        onChange={(e) => validateAndSet(e.target.value)}
      />
      <br />
      <button onClick={() => alert(email)}> SUBMIT</button>
    </div>
  );
};

export default EmailForm;
