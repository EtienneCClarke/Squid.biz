import useContract from "./useContract";
import kollab_share from "./contracts/Kollab_Share_Factory.json";

const useKollabShare = () => useContract(process.env.REACT_APP_CONTRACT_ADDRESS, kollab_share);

export default useKollabShare;