import PrimaryButton from "@/ui/primaryButton";
import SecondaryButton1 from "@/ui/secondaryButton1";
import SecondaryButton2 from "@/ui/secondaryButton2";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center', 
      gap:'50px'
    }}>
      <h1>Welcome to Connectly</h1>
      <SecondaryButton1 buttonText="Click Me" width="158px" height="36px" />
      <PrimaryButton buttonText="Click Me" width="158px" height="36px"/>
      <SecondaryButton2 buttonText="Click Me" width="158px" height="36px"/>
     </div>
  );
}
