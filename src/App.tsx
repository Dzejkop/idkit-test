import { IDKitWidget } from "@worldcoin/idkit";

function App() {
  const onSuccess = (result: any) => {
    console.log("Success:", result);
  };

  return (
    <>
      <IDKitWidget
        // docs say app_id is not required, but TypeScript complains without it
        app_id="app_self_hosted"
        action="whatever_action"
        signal="whatever_signal"
        onSuccess={onSuccess}
        advanced={{ self_hosted: true }}
      >
        {({ open }) => <button onClick={open}>Verify with World ID</button>}
      </IDKitWidget>
    </>
  );
}

export default App;
