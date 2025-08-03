// Librairie
import { useState, useRef, useEffect } from "react";

// Compposants
import Markdown from "marked-react";

export default function App() {
  // States
  const [prev, setPrev] = useState("");

  // Variable
  const input = useRef();

  // fonction
  const updatePrevisualisation = () => {
    setPrev(input.current.value);
  };

  // Cycle
  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
    updatePrevisualisation();
  }, []);

  return (
    <div className="App">
      <div className="elements">
        <div className="element">
          {/* textarea  */}
          <textarea
            rows={30}
            onChange={updatePrevisualisation}
            ref={input}
            defaultValue="# `Prévisualisateur - React`&#13;### Oh ! De la magie !&#13;En réalité, pas vraiment : ceci s'appelle du markdown, et ce projet réalisé entièrement avec React permet de le transformer en *HTML* !&#13;&#13;### Cas d'utilisation&#13;* *italique*&#13;* **gras**&#13;* `monospace`&#13;* ~~barré~~&#13;* # h1&#13;* ## h2&#13;* ### h3&#13;* #### etc&#13;[Believemy](https://believemy.com)"
          ></textarea>
        </div>
        <div className="element">
          {/* Prévisualisateur */}
          <Markdown>{prev}</Markdown>
        </div>
      </div>
    </div>
  );
}
