"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2372],{22372:function(t,a,r){r.r(a),r.d(a,{Split:function(){return o}});var e=r(17249),i=r(36140),s=r(49242),c=r(2593),n=r(64146);r(13550),r(71770),r(54098),r(2162),r(64063),r(62822);class o{get chainId(){return this._chainId}constructor(t,a,r){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,n=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.dx(t,a,c,s);(0,e._)(this,"contractWrapper",void 0),(0,e._)(this,"storage",void 0),(0,e._)(this,"abi",void 0),(0,e._)(this,"metadata",void 0),(0,e._)(this,"app",void 0),(0,e._)(this,"encoder",void 0),(0,e._)(this,"estimator",void 0),(0,e._)(this,"events",void 0),(0,e._)(this,"roles",void 0),(0,e._)(this,"interceptor",void 0),(0,e._)(this,"_chainId",void 0),(0,e._)(this,"withdraw",(0,i.dq)(async t=>i.aS.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await (0,i.cF)(t)]}))),(0,e._)(this,"withdrawToken",(0,i.dq)(async(t,a)=>i.aS.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:[await (0,i.cF)(a),await (0,i.cF)(t)]}))),(0,e._)(this,"distribute",(0,i.dq)(async()=>i.aS.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]}))),(0,e._)(this,"distributeToken",(0,i.dq)(async t=>i.aS.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await (0,i.cF)(t)]}))),this._chainId=n,this.abi=i.e.parse(c||[]),this.contractWrapper=d,this.storage=r,this.metadata=new i.ad(this.contractWrapper,i.dO,this.storage),this.app=new i.aY(this.contractWrapper,this.metadata,this.storage),this.roles=new i.ae(this.contractWrapper,o.contractRoles),this.encoder=new i.ac(this.contractWrapper),this.estimator=new i.aM(this.contractWrapper),this.events=new i.aN(this.contractWrapper),this.interceptor=new i.aO(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAllRecipients(){let t=[],a=c.O$.from(0),r=await this.contractWrapper.readContract.payeeCount();for(;a.lt(r);)try{let r=await this.contractWrapper.readContract.payee(a);t.push(await this.getRecipientSplitPercentage(r)),a=a.add(1)}catch(t){if("method"in t&&t.method.toLowerCase().includes("payee(uint256)"))break;throw t}return t}async balanceOfAllRecipients(){let t=await this.getAllRecipients(),a={};for(let r of t)a[r.address]=await this.balanceOf(r.address);return a}async balanceOfTokenAllRecipients(t){let a=await (0,i.cF)(t),r=await this.getAllRecipients(),e={};for(let t of r)e[t.address]=await this.balanceOfToken(t.address,a);return e}async balanceOf(t){let a=await (0,i.cF)(t),r=await this.contractWrapper.readContract.provider.getBalance(this.getAddress()),e=await this.contractWrapper.readContract["totalReleased()"](),s=r.add(e);return this._pendingPayment(a,s,await this.contractWrapper.readContract["released(address)"](a))}async balanceOfToken(t,a){let r=await (0,i.cF)(a),e=await (0,i.cF)(t),c=new n.CH(r,s,this.contractWrapper.getProvider()),o=await c.balanceOf(this.getAddress()),d=await this.contractWrapper.readContract["totalReleased(address)"](r),p=o.add(d),h=await this._pendingPayment(e,p,await this.contractWrapper.readContract["released(address,address)"](r,e));return await (0,i.b6)(this.contractWrapper.getProvider(),r,h)}async getRecipientSplitPercentage(t){let a=await (0,i.cF)(t),[r,e]=await Promise.all([this.contractWrapper.readContract.totalShares(),this.contractWrapper.readContract.shares(t)]);return{address:a,splitPercentage:e.mul(c.O$.from(1e7)).div(r).toNumber()/1e5}}async _pendingPayment(t,a,r){let e=a.mul(await this.contractWrapper.readContract.shares(await (0,i.cF)(t))),s=e.div(await this.contractWrapper.readContract.totalShares());return s.sub(r)}async prepare(t,a,r){return i.aS.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}}(0,e._)(o,"contractRoles",["admin"])}}]);