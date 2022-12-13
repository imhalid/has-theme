import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const colorThemes = document.querySelectorAll('[name="theme"]');
    // store theme
    const storeTheme = function (theme) {
      localStorage.setItem("theme", theme);
    };

    // set theme when visitor returns
    const setTheme = function () {
      const activeTheme = localStorage.getItem("theme");
      colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
          themeOption.checked = true;
        }
      });
      // fallback for no :has() support
      document.documentElement.className = activeTheme;
    };

    colorThemes.forEach((themeOption) => {
      themeOption.addEventListener("click", () => {
        storeTheme(themeOption.id);
        // fallback for no :has() support
        document.documentElement.className = themeOption.id;
      });
    });

    document.onload = setTheme();
  }, []);
  return (
    <div>
      <fieldset>
        <legend className="visually-hidden">Pick a color scheme</legend>
        <label htmlFor="light" className="visually-hidden">
          Light
        </label>

        <input type="radio" name="theme" id="light" />
        <input type="radio" id="pink" name="theme" />
        <label htmlFor="pink" className="visually-hidden">
          Pink theme
        </label>
        <label htmlFor="blue" className="visually-hidden">
          Blue theme
        </label>
        <input type="radio" id="blue" name="theme" />
        <label htmlFor="green" className="visually-hidden">
          Green theme
        </label>
        <input type="radio" id="green" name="theme" />
        <label htmlFor="dark" className="visually-hidden">
          Dark theme
        </label>
        <input type="radio" id="dark" name="theme" />
      </fieldset>
    </div>
  );
}
