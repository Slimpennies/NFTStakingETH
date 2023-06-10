"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3278],{6009:function(t,a,r){r.d(a,{S:function(){return n}});var e=r(17249),s=r(36140);class n{get chainId(){return this._chainId}constructor(t,a,r){(0,e._)(this,"contractWrapper",void 0),(0,e._)(this,"storage",void 0),(0,e._)(this,"erc20",void 0),(0,e._)(this,"_chainId",void 0),(0,e._)(this,"transfer",(0,s.dq)(async(t,a)=>this.erc20.transfer.prepare(t,a))),(0,e._)(this,"transferFrom",(0,s.dq)(async(t,a,r)=>this.erc20.transferFrom.prepare(t,a,r))),(0,e._)(this,"setAllowance",(0,s.dq)(async(t,a)=>this.erc20.setAllowance.prepare(t,a))),(0,e._)(this,"transferBatch",(0,s.dq)(async t=>this.erc20.transferBatch.prepare(t))),this.contractWrapper=t,this.storage=a,this.erc20=new s.ak(this.contractWrapper,this.storage,r),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(t){return this.erc20.balanceOf(t)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(t){return await this.erc20.allowance(t)}async allowanceOf(t,a){return await this.erc20.allowanceOf(t,a)}}},63278:function(t,a,r){r.r(a),r.d(a,{TokenDrop:function(){return c}});var e=r(17249),s=r(36140),n=r(6009),i=r(9279);r(13550),r(71770),r(54098),r(2162),r(64063),r(62822);class c extends n.S{constructor(t,a,r){var n;let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.dx(t,a,o,i);super(p,r,h),n=this,(0,e._)(this,"abi",void 0),(0,e._)(this,"metadata",void 0),(0,e._)(this,"app",void 0),(0,e._)(this,"roles",void 0),(0,e._)(this,"encoder",void 0),(0,e._)(this,"estimator",void 0),(0,e._)(this,"sales",void 0),(0,e._)(this,"platformFees",void 0),(0,e._)(this,"events",void 0),(0,e._)(this,"claimConditions",void 0),(0,e._)(this,"interceptor",void 0),(0,e._)(this,"claim",(0,s.dq)(async function(t){let a=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return n.claimTo.prepare(await n.contractWrapper.getSignerAddress(),t,a)})),(0,e._)(this,"claimTo",(0,s.dq)(async function(t,a){let r=!(arguments.length>2)||void 0===arguments[2]||arguments[2];return n.erc20.claimTo.prepare(t,a,{checkERC20Allowance:r})})),(0,e._)(this,"delegateTo",(0,s.dq)(async t=>s.aS.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await (0,s.cF)(t)]}))),(0,e._)(this,"burnTokens",(0,s.dq)(async t=>this.erc20.burn.prepare(t))),(0,e._)(this,"burnFrom",(0,s.dq)(async(t,a)=>this.erc20.burnFrom.prepare(t,a))),this.abi=s.e.parse(o||[]),this.metadata=new s.ad(this.contractWrapper,s.dP,this.storage),this.app=new s.aY(this.contractWrapper,this.metadata,this.storage),this.roles=new s.ae(this.contractWrapper,c.contractRoles),this.encoder=new s.ac(this.contractWrapper),this.estimator=new s.aM(this.contractWrapper),this.events=new s.aN(this.contractWrapper),this.sales=new s.ag(this.contractWrapper),this.platformFees=new s.aP(this.contractWrapper),this.interceptor=new s.aO(this.contractWrapper),this.claimConditions=new s.ai(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(await (0,s.cF)(t)))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.readContract.delegates(await (0,s.cF)(t))}async isTransferRestricted(){let t=await this.contractWrapper.readContract.hasRole((0,s.bB)("transfer"),i.d);return!t}async prepare(t,a,r){return s.aS.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}}(0,e._)(c,"contractRoles",["admin","transfer"])}}]);