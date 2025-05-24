import React, {useState} from 'react'

const CharacterRegistrationForm = () => { 
  const [name, setName] = useState('');
  const [attribute, setAttribute] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !attribute) {
        alert('名前と属性を入力してください。');
        return;
        }
        setName('');
        setAttribute('');
    };

  return (
    <div>
        <h2>人物登録</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='characterName' >
                    名前：
                </label>
                <input type='text' id='characterName' value={name} onChange={(e) => setName(e.target.value)}/>

            </div>
            <div>
                <label htmlFor="">
                    属性：
                </label>
                <input type="text" id='characterAttribute' value={attribute} onChange={(e) => setAttribute(e.target.value)}/>
                <small>例：探偵、容疑者、被害者、警部など</small>
            </div>
            <button
          type="submit">
          登録
        </button>
        </form>
    </div>
  )
}

export default CharacterRegistrationForm