import React from 'react';
import { getImageUrl } from './utils';
interface Profile {
    imageId: string;
    name: string;
    profession: string;
    awards: string[];
    discovery: string;
    imageSize?: number;
    }
//? optional 없을수도있음 에러를 발생하지않음.
    const Profile: React.FC<Profile> = ({
        //React.FC<제네릭> 함수컴포넌트 제네릭으로 타입 지정해서 해당 필드들을 함수의 인자로 받아쓰기가능
        imageId,
        name,
        profession,
        awards,
        discovery,
        imageSize = 70
        }) => {
        return (
        <section className="profile">
        <h2>{name}</h2>
        <img
             className="avatar"
             src={getImageUrl(imageId)}
             alt={name}
             width={imageSize}
             height={imageSize}
           />
        <ul>
        <li>
        <b>Profession:</b> {profession}
        </li>
        <li>
        <b>Awards: {awards.length} </b>
        ({awards.join(", ")})
        </li>
        <li>
        <b>Discovered: </b>
        {discovery}
        </li>
        </ul>
        </section>
        );
        };
        
        const Gallery: React.FC = () => {
        return (
        <div>
        <h1>Notable Scientists</h1>
        <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
        "Nobel Prize in Physics",
        "Nobel Prize in Chemistry",
        "Davy Medal",
        "Matteucci Medal"
        ]}
        />
        <Profile
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        />
        </div>
        );
        };
        
        export default Gallery;
        //1-5 챌린지
        //형식이 같은 JSX 요소들을 한번만 쓰고 값들만 정의를 따로 하는 함수를 만듬.
