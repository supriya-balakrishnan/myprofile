const skillset = [
  {
    title:
      'Creating user-friendly web Application by using markup languages, such as HTML,CSS,Javascript and React.',
    id: 1,
  },
  { title: ' Good Understanding of layout aesthetics and programming.', id: 2 },
  { title: 'Familiarity with GitHub and StoryBook.', id: 3 },
];

function Expertise() {
  const listItems = skillset.map((skillset) => (
    <li key={skillset.id}>{skillset.title}</li>
  ));

  return (
    <>
      <div className=" box-border h-auto w-auto p-4 border-2 opacity-70  m4 ">
        <h1>Expertise:</h1>
        <br />
        <ul className="list-disc list-inside">{listItems}</ul>
      </div>
    </>
  );
}

export default Expertise;
