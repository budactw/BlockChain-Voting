var abi = require('ethereumjs-abi')

var decoded = abi.rawDecode(["0xbf7106a9248453b0cf1f31031101dcf7383436924f7798d9b2b335d8b64a455b"], "0x608060405234801561001057600080fd5b5060018054600160a060020a0319163317905561003464010000000061003c810204565b6000556100be565b600042604051602001808281526020019150506040516020818303038152906040526040518082805190602001908083835b6020831061008d5780518252601f19909201916020918201910161006e565b5181516020939093036101000a60001901801990911692169190911790526040519201829003909120949350505050565b610121806100cd6000396000f30060806040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416638da5cb5b8114604d578063f2c9ecd8146088575b600080fd5b348015605857600080fd5b50605f60ac565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b348015609357600080fd5b50609a60c8565b60408051918252519081900360200190f35b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60015460009073ffffffffffffffffffffffffffffffffffffffff16331460ee57600080fd5b50600054905600a165627a7a723058200f62cd8af105a628b13045b264af95604bd6751d4d4cddb8415b212f993a3b530029")

console.log(decoded);
