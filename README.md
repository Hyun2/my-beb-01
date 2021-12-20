![](https://blog.kakaocdn.net/dn/bVIdeM/btrosw8Ky9i/ggx3UQjlpxacvpUcahDUx1/img.gif)

[https://github.com/Hyun2/my-beb-01](https://github.com/Hyun2/my-beb-01)



![](https://blog.kakaocdn.net/dn/bbiink/btrorBQfd6I/1ON1yZFmvbwELVKQasdsxk/img.gif)

[https://github.com/codestates/BEB\_01\_Yukjo](https://github.com/codestates/BEB_01_Yukjo)

## 오픈씨의 일부 기능 구현

자체 배포한 ERC20 토큰과 ERC721 토큰을 웹에서 조회하고 상대방에게 전송하는 기능과 웹에서 ERC721토큰(NFT)를 민팅하는 프로젝트를 진행해보았다. 레퍼런스가 web3.js로 되어 있어서 팀프로젝트는 web3.js로 진행하고 복습은 ethers.js로 진행 중이다.

## 개선이 필요한 코드

```solidity
const [erc721list, setErc721list] = useState([]);

    const addNewErc721Token = async () => {
        // ... 생략
          let arr = [];
          for (let i = 1; i <= totalSupply; i++) {
              arr.push(i);
          }

          for (let tokenId of arr) {
              let tokenOwner = await tokenContract.methods
                  .ownerOf(tokenId)
                  .call();
              if (String(tokenOwner).toLowerCase() === account) {
                  let tokenURI = await tokenContract.methods
                      .tokenURI(tokenId)
                      .call();
                  setErc721list((prevState) => {
                      return [...prevState, { name, symbol, tokenId, tokenURI }];
                  });
              }
          }
    }
```

입력으로 받은 erc721 토큰 컨트랙트 주소에서 발행된 토큰들 중에서 연결된 지갑이 소유하고 있는 토큰들만 필터링하는 기능의 함수이다. 아래쪽 반복문에서 tokenId를 순회하면서 tokenId 한 번 당 스마트 컨트랙트를 두 번이나 호출하고 있다. 스마트 컨트랙트 내에서 msg.sender를 받아서 sender가 owner인 Token을 배열로 리턴하는 함수를 만들어보아야 겠다.

## 회고

오랜만에 누군가와 함께 협업하는 경험을 하였다. 팀원이 적극적이고 열심히 하였기 때문에 나도 의욕적으로 할 수 있었다. 이번에 만든 것에 NFT 민팅할 파일을 IPFS로 호스팅하는 기능을 추가해보아야 겠다. 요즘 블록체인에 대해 학습하고 있는데, 이번에는 솔리디티나 스마트 컨트랙트보다는 프론트엔드에 초점을 맞춘 것 같다. 테스트를 위해서 배포했던 erc20, erc721 코드는 비교적 간단했다.(더 복잡한 레퍼런스도 있겠지만 일단 기본적인 것을 우선으로 했다.) 오랜만에 프론트엔드를 하다보니 리액트 상태관리나, UI 프레임워크에 대해 서칭하는데 시간을 많이 할애한 것 같다. 다음에는 솔리디티와 스마트 컨트랙트에 집중해서 프로젝트를 구현해보아야 겠다.
