import iconStar from "../src/assets/images/icon-star.svg";
import iconPlus from "../src/assets/images/icon-plus.svg";
import iconMinus from "../src/assets/images/icon-minus.svg";
import { useState } from "react";
import "./styles/styles.scss";

function App() {
  const [open, setOpen] = useState(false)

  const toggleAccordian =(index)=>{
    setOpen(open === index ? null : index);
  }

  const faqs=[
    {
      question:"What is Frontend Mentor, and how will it help me?",
      answer:"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
      question:"Is Frontend Mentor free?",
      answer:"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
      question:"Can I use Frontend Mentor projects in my portfolio?",
      answer:"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
      question:"How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
  ]


  return (
    <>
    <main>
      <div id="card-container">
      <header>   
        <img src={iconStar} alt="star icon"  aria-hidden="true"/>
        <h1> FAQs</h1>
      </header>
   
      <section aria-label="Frequently Asked Questions">
       { faqs.map((faq, index)=>(
        <div key={index} className="faq-card"> 
         <span className="question-section" onClick={()=>toggleAccordian(index)}> 
          <h3 id={`faq-question-${index}`} className="question" 
              aria-expanded={open === index} aria-controls={`faq-answer-${index}`}>
            {faq.question} 
          </h3>
          {/* this changed all the svg icons */}
          {/* {!open ? <img src={iconPlus} alt="plus icon" /> : <img src={iconMinus} alt="minus icon"/>}  */}
          {/* this fixes the abive issue  */}
          <img  src={open === index ? iconMinus : iconPlus} alt={open === index ? "Collapse" : "Expand"} aria-hidden="true"/>
          </span>
         { open === index && (<div
                id={`faq-answer-${index}`}
                className="answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={open !== index}>
                  <p id={`faq-answer-${index}`} className="answer">{faq.answer}</p></div>)}
         <hr></hr>
        </div>
       
       ))}
      </section>
      </div>
    </main>
    </>

  )
}

export default App
