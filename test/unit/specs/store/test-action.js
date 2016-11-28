// From: https://vuex.vuejs.org/en/testing.html
export default (action, payload, state, expectedMutations, done) => {
  let count = 0;

  // mock commit
  const commit = (type, commitPayload) => {
    const mutation = expectedMutations[count];
    mutation.type.should.equal(type);
    if (commitPayload) {
      mutation.payload.should.deep.equal(commitPayload);
    }
    count += 1;
    if (count >= expectedMutations.length) {
      done();
    }
  };

  // call the action with mocked store and arguments
  action({ commit, state }, payload);

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    count.should.equal(0);
    done();
  }
};
