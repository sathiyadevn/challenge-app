package com.dev43.challengeapp;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChallengeService {

    private List<Challenge> challenges=new ArrayList<>();

    public List<Challenge> getAllChallenges(){
        return challenges;
    }

    public boolean addChallenge(Challenge challenge){
        if(challenge != null) {
            challenges.add(challenge);
            return true;
        }
        else
            return false;
    }

}
