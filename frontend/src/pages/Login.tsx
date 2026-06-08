import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const login = async () => {

    await api.post(
      "/api/auth/login",
      {
        email,
        password,
      }
    );

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Stock Market AI</h1>

      <input
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}