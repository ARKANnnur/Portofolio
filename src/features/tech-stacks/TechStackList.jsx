import BasicBox from '../../ui/BasicBox';
import TechStackItem from './TechStackItem';

const fakeData = [
  {
    name: 'Javascript',
    color: '#F7E025',
  },
  {
    name: 'React Js',
    color: '#94C7D8',
  },
  {
    name: 'Tailwind Css',
    color: '#38BDF8',
  },
  {
    name: 'Bootstrap',
    color: '#fff',
  },
  {
    name: 'Supabase',
    color: '#33CE8D',
  },
  {
    name: 'Figma',
    color: '#fff',
  },
  {
    name: 'Github',
    color: '#fff',
  },
];

function TechStackList() {
  return (
    <>
      {fakeData.map((data) => (
        <BasicBox
          custom="w-48 h-44 contents-center flex-col group hover:z-10"
          key={data.name}
          type="animation"
        >
          <BasicBox custom="h-36 w-36 -translate-y-10 contents-center group-hover:translate-y-3 transition ease-in-out delay-150 duration-1000">
            <TechStackItem name={data.name} />
          </BasicBox>
          <p
            className="-translate-y-5 text-lg font-bold transition delay-150 duration-1000 ease-in-out group-hover:scale-125 md:text-xl"
            style={{ color: data.color }}
          >
            {data.name}
          </p>
        </BasicBox>
      ))}
    </>
  );
}

export default TechStackList;
