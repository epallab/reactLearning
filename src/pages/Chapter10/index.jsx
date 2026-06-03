import Section from '../../components/Content/Section';
import ArraysAndHashing from './ArraysAndHashing';
import TwoPointers from './TwoPointers';
import SlidingWindow from './SlidingWindow';
import Stack from './Stack';
import BinarySearch from './BinarySearch';
import LinkedList from './LinkedList';
import Trees from './Trees';
import Graphs from './Graphs';
import DynamicProgramming from './DynamicProgramming';

export default function Chapter10() {
  return (
    <Section
      id="important-dsa"
      number="10"
      title="Important DSA in JavaScript"
      theme="purple"
    >
      <p className="section-intro">
        Data Structures and Algorithms (DSA) are the foundation of computer science and technical interviews. 
        In this chapter, we cover the top 45+ medium-to-hard level problems across 9 key patterns. 
        Each problem includes the brute-force ("Normal") approach and the optimized ("Optimal") approach. 
        Look out for the <strong>Frontend Priority</strong> badges which highlight the 20 most crucial problems to study if you are short on time.
      </p>

      <ArraysAndHashing />
      <TwoPointers />
      <SlidingWindow />
      <Stack />
      <BinarySearch />
      <LinkedList />
      <Trees />
      <Graphs />
      <DynamicProgramming />
    </Section>
  );
}
