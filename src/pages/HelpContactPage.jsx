import { useState } from "react";

function HelpContactPage() {
  const [selectImage, setselectImage] = useState("");
  const [numbers, setNumbers] = useState("");
  const handleOptionImage = (e) => {
    setselectImage(e.target.value);
  };
  const handleOptionNumber = (e) => {
    setNumbers(e.target.value)
  }

  const getImage = () => {
    switch (selectImage) {
      case "option1":
        return "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678928211/safe-space-app/share-with-mental-and-substance-disorders_swvpti.png";
      case "option2":
        return "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678928225/safe-space-app/share-with-mental-and-substance-disorders_1_gfgpzx.png";
      case "option3":
        return "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678928560/safe-space-app/share-with-mental-and-substance-disorders_2_c4uddh.png";
      case "option4":
        return "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678928559/safe-space-app/share-with-mental-and-substance-disorders_3_itqb91.png";
      case "option5":
        return "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678928561/safe-space-app/share-with-mental-and-substance-disorders_4_e2nnuu.png";
      case "option6":
        return "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678928560/safe-space-app/share-with-mental-and-substance-disorders_5_vre0aj.png";
      case "option7":
        return "https://res.cloudinary.com/dhtrxjdas/image/upload/v1678928559/safe-space-app/share-with-mental-and-substance-disorders_6_vtc8mt.png";
      default:
        return "";
    }
  };
  const getNumber = () => {
    switch(numbers) {
      case "option1":
        return <ul> 
        <li>National Domestic Violence Hotline (USA): 1-800-799-SAFE (7233) or TTY 1-800-787-3224</li>
        <li>National Suicide Prevention Lifeline (USA): 1-800-273-TALK (8255)</li> 
        <li>Crisis Text Line (USA): Text HOME to 741741</li>
        <li>SAMHSA National Helpline (USA): 1-800-662-HELP (4357)</li>
        <li>National Human Trafficking Hotline (USA): 1-888-373-7888 or text HELP to BeFree (233733)</li>
        <li>National Eating Disorders Association Helpline (USA): 1-800-931-2237</li>
        <li>National Parent Helpline (USA): 1-855-427-2736</li>
        <li>Alcoholics Anonymous (USA): 1-800-923-8722</li>
        <li>Narcotics Anonymous (USA): 1-800-974-0062</li>
        </ul>;
      case "option2":
        return <ul>
          <li>Canadian Domestic Violence Hotline: 1-866-863-0511</li>
          <li>Canadian Suicide Prevention Service: 1-833-456-4566</li>
          <li>Canadian Crisis Text Line: Text CONNECT to 686868</li>
          <li>Canadian Drug and Alcohol Helpline: 1-866-531-2600</li>
        </ul>;
      case "option3":
        return <ul>
          <li>UK Domestic Abuse Helpline: 0808 2000 247</li>
          <li>UK Samaritans Helpline: 116 123</li>
          <li>UK National Drugs Helpline: 0300 123 6600</li>
        </ul>;
      case "option4":
        return <ul>
          <li>Australian National Domestic Violence Hotline: 1800 RESPECT (1800 737 732)</li>
          <li>Australian Suicide Call Back Service: 1300 659 467</li>
          <li>Australian Alcohol and Drug Information Service: 1800 250 015</li>
        </ul>;
      case "option5":
        return <ul>
          <li>Argentina - National Domestic Violence Hotline: 144</li>
          <li>Argentina - National Suicide Prevention Lifeline: (54-11) 5275-1135</li>
          <li>Argentina - Narcotics Anonymous: (54-11) 5353-0533</li>
          <li>Argentina - Alcoholics Anonymous: (54-11) 4374-9666</li>
        </ul>;
      case "option6":
        return <ul>
          <li>Spain - National Domestic Violence Hotline: 016</li>
          <li>Spain - National Suicide Prevention Lifeline: 717 003 717</li>
          <li>National Drug Addiction Helpline: 900 161 515</li>
          <li>National Institute of Social Security (INSS) Helpline: 901 16 65 65</li>
          <li>SOS Depression (Depression Helpline): 717 003 717</li>
          <li>Fundación ANAR (for children and teenagers in distress): 900 20 20 10</li>
          <li>Fundación Salud Mental España (for mental health support): 911 385 088</li>
        </ul>;
      case "option7":
        return <ul>
          <li>National Domestic Violence Helpline: 0800 150 150</li>
          <li>South African Depression and Anxiety Group: 0800 456 789 or 0800 21 22 23 or SMS 31393</li>
          <li>Lifeline (Crisis support and suicide prevention): 0861 322 322</li>
          <li>South African National Council on Alcoholism and Drug Dependence (SANCA) Helpline: 0861 4 SANCA (72622)</li>
          <li>Childline South Africa (for children and youth in distress): 0800 055 555</li>
          <li>Tears Foundation (for survivors of sexual abuse): 1347355# or 010 590 5920 or SMS/WhatsApp: 081 353 4846</li>
          <li>Famsa Counselling Helpline (Family and Marriage Support): 011 975 7106/7</li>
        </ul>;
      case "option8":
        return <ul>
          <li>China - National Domestic Violence Hotline: 12338</li>
          <li>China - National Suicide Prevention Lifeline: 800-810-1117</li>
          <li>Hong Kong - The Samaritans 24-hour Multilingual Suicide Prevention Hotline: (852) 2896-0000</li>
          <li>India - National Domestic Violence Hotline: 181</li>
          <li>India - National Suicide Prevention Lifeline: 022-27546669</li>
          <li>Indonesia - National Narcotics Agency (BNN) Hotline: 1131 or (62) 21-522-6868</li>
          <li>Indonesia - National Mental Health Helpline: (62) 21-500-454</li>
          <li>Japan - TELL Lifeline (for crisis intervention, suicide prevention, and mental health support): 03-5774-0992</li>
          <li>Malaysia - Women’s Aid Organization (WAO) Hotline (for domestic violence): +603 7956 3488</li>
          <li>Malaysia - Malaysian Mental Health Association Helpline: 03-2935 9935</li>
          <li>Singapore - Samaritans of Singapore (SOS) Hotline (for suicide prevention): 1800-221-4444</li>
          <li>South Korea - Korea Suicide Prevention Center (for crisis intervention and suicide prevention): 1393</li>
        </ul>
      default:
        return ""

    }
  }
  return (
    <div>
      <p>
        Most people don't think about future mental health issues, but mental
        health determines how you think, feel and act. Good mental health is
        when you feel positive about yourself and cope well with the everyday
        pressures. If you experience issues dealing with everyday problems, it
        could be a sign of a mental health problem and should be addressed
        immediately.
      </p>
      <h3>Mental and substance use disorders are common globally</h3>
      <p>
        In the map we see that globally, mental and substance use disorders are
        very common: around 1-in-7 people (15%) have one or more mental or
        substance use disorders.
      </p>
      <select value={selectImage} onChange={handleOptionImage}>
        <option>Select an option</option>
        <option value="option1">World</option>
        <option value="option2">Africa</option>
        <option value="option3">North America</option>
        <option value="option4">South America</option>
        <option value="option5">Asia</option>
        <option value="option6">Europe</option>
        <option value="option7">Oceania</option>
      </select>
      <img src={getImage()} width="500px" />
      <div>
        <p>If you need help feel free to chat with other users and help each other.
        If you think that you need professional help, please, contact some of this numbers below.
        </p>
        <select value={numbers} onChange={handleOptionNumber}>
          <option>Select an option</option>
          <option value="option1">USA</option>
          <option value="option2">Canada</option>
          <option value="option3">UK</option>
          <option value="option4">Australia</option>
          <option value="option5">Argentina</option>
          <option value="option6">Spain</option>
          <option value="option7">South Africa</option>
          <option value="option8">Asia</option>
        </select>
        <ul>{getNumber()}</ul>
      </div>
    </div>
  );
}

export default HelpContactPage;
