const STORAGE_KEY = "breure-theme"

export function ThemeScript() {
  const script = `(function(){try{var k="${STORAGE_KEY}";var t=localStorage.getItem(k);var d=document.documentElement;var light=t==="light"||(!t&&window.matchMedia("(prefers-color-scheme: light)").matches);if(light){d.classList.add("light");d.classList.remove("dark");}else{d.classList.add("dark");d.classList.remove("light");}}catch(e){document.documentElement.classList.add("dark");}})();`

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
    />
  )
}
