export const qnaData = [
  {
    idx: 4,
    title: 'do와 관련하여 질문있습니다.',
    content: `쌤~ 
              감이온다 영어 교재 55p에서 질문이 있습니다.
              Why are you so tanned? 라는 문장을 봤는데요,
              tan은 동사인데 왜 Why do you so tanned?라고 하지 않나요?
              be동사는 형용사와, do동사는 동사와 쓴다고 했는데 혼란스러워요...`,
    createdAt: '2023-11-01',
    userName: '김회원',
    isAnswered: false,
    answer: null,
  },
  {
    idx: 5,
    title: 'I want learn English는 틀린 문장인가요?',
    content: `안녕하세요, 선생님! I want to learn English라는 문장을 보았는데요, 
              I want learn English 도 맞는 말 아닌가요? 
              제가 to부정사를 사용하는 방법을 이해하지 못하는것 같은데, 어떻게 사용해야 하고, 예시를 통해 설명해 주실 수 있을까요?`,
    createdAt: '2023-10-28',
    userName: '김회원',
    isAnswered: true,
    answer: `안녕하세요! 'I want to learn English'라는 문장은 정확한 문법을 따르고 있습니다. 
             영어에서 'to' 다음에 동사 원형을 사용하는 것이 일반적인 규칙입니다. 
             'To' 다음에 동사 원형을 두는 것은 영어의 기본 구조 중 하나로, 동작이나 행동의 목적이나 의도를 나타냅니다. 
             'I want to learn English'라고 말할 때, 'to learn'은 '배우려고 한다' 또는 '배울 의도가 있다'라는 의미를 전달합니다. 
             'I want learn English'는 올바른 문법이 아니므로 'to' 다음에 동사 원형을 추가하는 것이 올바른 방법입니다. 이렇게 to부정사를 사용함으로써, 목적이나 의도를 더 명확하게 표현할 수 있습니다.`,
  },
  {
    idx: 6,
    title: 'What과 That 접속사의 차이에 대해 궁금합니다.',
    content: `안녕하세요, 선생님. What과 That은 문장에서 둘 다 사용되는데, 
              무슨 차이가 있는 건가요? 어떤 상황에서 어떤 것을 사용해야 하는 건가요? 
              예시를 들어 설명해주실 수 있을까요?`,
    createdAt: '2023-10-28',
    userName: '김회원',
    isAnswered: true,
    answer: `[What]
            'What'은 주로 명사 절 앞에서 사용되며, 문장의 주어나 목적어 역할을 합니다.
            'What'은 의문사로 사용되어 질문 또는 물음을 나타내며, 무엇인가에 대한 정보나 정의를 요청합니다.
            예시:
            "What you said is true." (당신이 말한 것은 사실이에요.)
            "Tell me what you want." (무엇을 원하는지 말해봐.)
            
            [That]
            'That'은 주로 명사 절 앞에서 사용되며, 목적어 또는 주어의 역할을 할 수 있습니다.
            'That'은 명사 절을 도입하고, 그 안에서 정보를 제공하거나 명사를 구체화합니다.
            예시:
            "I know that he is coming." (그가 오고 있다는 것을 알아요.)
            "She believes that honesty is important." (정직이 중요하다고 믿어요.)
            따라서, 'what'은 주로 의문사로 사용되며 질문에 관련이 있으며, 'that'은 주로 명사 절 도입 및 명사 구체화에 사용됩니다. 이러한 차이에 따라 적절한 상황에서 사용하게 됩니다.`,
  },
];

// qna 리스트 불러오기
export const getQnaList = () => {
  return new Promise(resolve => setTimeout(resolve, 1000))
    .then(() => {
      return qnaData;
    })
    .catch(() => {
      return null;
    });
};

// qna 상세불러오기
export const getQnaDetail = (idx: number) => {
  return new Promise(resolve => setTimeout(resolve, 1000))
    .then(() => {
      return qnaData.filter(qna => qna.idx === idx)[0];
    })
    .catch(() => {
      return null;
    });
};
