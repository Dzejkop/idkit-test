import { IDKitWidget } from "@worldcoin/idkit";

function App() {
  const onSuccess = (result) => {
    console.log("Success:", result);
  };

  return (
    <>
      <IDKitWidget
        action="whatever_action"
        signal="whatever_signal"
        onSuccess={onSuccess}
        verification_level="orb"
        advanced={{ self_hosted: true }}
      >
        {({ open }) => <button onClick={open}>Verify with World ID</button>}
      </IDKitWidget>
    </>
  );
}

export default App;
