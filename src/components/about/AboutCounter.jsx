import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 2, duration: 2 });
	useCountUp({ ref: 'dsaProblemCounter', end: 200, duration: 2 });
	useCountUp({ ref: 'linkedInCounter', end: 1500, duration: 2 });


	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Intern experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="DSA Problems Solved"
					counter={<span id="dsaProblemCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="LinkedIn Connections"
					counter={<span id="linkedInCounter" />}
					measurement="+"
				/>


			</div>
		</div>
	);
};

export default AboutCounter;
