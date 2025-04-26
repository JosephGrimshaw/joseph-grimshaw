export const projectsDetailsData = [
    {
        id: 0, // Ant Simulation 

        github: "https://github.com/JosephGrimshaw/AntSim",

        src2: "/assets/images/projects/antSim/sim.png",
        alt2: "The Simulation Running",
        width2: 1280,
        height2: 853,
        caption2: "The Simulation Running",

        p1: `This project, which I am actively building, is the most challenging to date due to the complexity of the AI fine-tuning involved.
            It aims to establish whether natural ant behaviours will emerge in a computer-modelled simulation. As such, it consists of two DRL-trained
            agents which control the actions of the ants and the colonies as they attempt to grow the colony in the most efficient manner. Due to the intricacy of the behaviours
            the agents must learn to model, I am using advanced methods such as curriculum learning to yield meaningful results without biasing the simulation.`,

        p2: `Having had a keen interest in ants for many years, I find the social mechanisms behind colony function fascinating. I am oft
            entranced by the interactions of these seemingly unintelligent creatures, and how they work together to organise such a
            complicated system. As Richard Dawkins describes, an ant colony could be compared to an organism such as a human, and each ant a cell.
            I love this analogy, and, upon completing the Harvard CS50 AI course (which teaches reinforcement learning), this seemed the perfect
             application of my (hopefully) newly-gained skills. So, after putting together a plan for the project and how it would function, I got to work.`,

        p3: `Particularly for debugging purposes, I knew that the visual aspect of the project would be vital to its success. As I had extensive experience with
            pygame, this was my software of choice. However, I ensured that the visuals could be disabled by changing a simple constant variable,
            as otherwise they would significantly decrease performance during training. I decided to use a Q-Learning algorithm, as this was what the
            CS50 AI course taught, and a deep neural network for prediction, as I knew that there would be many, complex inferences that would need to be made by
            the AI from the state provided. Next came the decision about which aspects of real-life to include in the simulation, and the complexity of this inclusion. I found
            this very interesting, and gained much experience with the process, as, though I had created other computer models, I had never had to consider the inclusion
            of RL models. I wanted a simulation that was as accurate to real life as it could be, as this would make my results all the more meaningful. However,
             every added feature would affect the speed of the application, a key consideration to avoid overly extensive training
            time and to speed the convergence process. Furthermore, this extra information would have to be added to the state fed to the models, which would slow convergence
            and risk the model never learning which pieces of state were actually important.`,
            
        p4: `Ultimately, I decided to frame the problem as a grid of tiles, to avoid having to
            work with continuous values and action and attack ranges. This allowed me to feed the state of tiles rather than regions, greatly decreasing
            complexity. To decide which environmental factors would best encourage ant behaviours, I looked to the real world to see which factors most governed their
            actions. Quite clearly, the answer was food and competition/predators (which could technically also fall under food). I planned to have two colonies in the environment,
            and randomly spawning food. Though I was originally going to include enemy creatures, I decided against this, as the addition would not provide any extra nuance to the
            simulation, and would probably not greatly affect the ants' behaviour as they already had competition and threats in the form of the enemy colony. It would, however, have
            increased computational and state complexity. I included ant castes of workers and soldiers, with each having different hp, dmg, cost etc, as castes are key to the functioning
            of colonies in the real world, and I was interested to see which behavioural patterns would be found by the ant model depending on the caste provided in its state. I also wanted
            the actions available to the agents to be as realistic as possible. Food-related actions were a must, as well as attacking for the ants. However, I also included a set of unique
            pheromones that the ants and the colony could leave, as I was interested to see whether the actors would begin to use these for specific scenarios and create pheromone trails.
            To minimise complexity and increase realism, I only allowed the ants to view a 3x3 square around them in their state. I also fed them information about their caste, hp, food held,
            hunger and position relative to their colony. I built out the simulation over two days, then began work on the AI.`,

        p5: `I am still working on this project, and will update this description once it is completed. This has almost certainly been the most valuable experience I have had for developing
            AI skills, as I have had to overcome many unforseen problems. For example, the multi-step nature of the process of collecting food and delivering it to the colony requires a temporal
            knowledge within the ants, so I extended the ant model to include an RNN as well as implementing a CNN to process grid data as if it were an image with channels. This took extensive time,
            and handling the hidden state was particularly challenging as multiple ants using the same agent meeant that I had to store ant ids and reference them when fetching and training using the
            hidden state. Also, I am having to alter the simulation to increase convergence rates. I have made the reward function primarily based on a metric of the colony's total net "food value" (held
            or in the form of ants). This means that, when the colony eats or an ant dies, this will produce a reward for ants whose actions likely had nothing to do with the event. Furthermore, the sparse
            nature of the reward and the multiple steps required to achieve it meant that ants were never learning any kind of strategy. As the ants never provided food and cost the colony food to produce,
            the colony model simply stopped producing them. So, I am planning on implementing curriculum learning to avoid these problems. I will begin with a small grid and one ant and colony, increasing the
            chances of the ant discovering the food collection process. Initially, I will make the colony take random moves, and only implement its AI when the ants are smart enough to be a worthwhile investment.
            I will slowly increase the environment's complexity, adding more ants, varying food spawning rates and adding colony AI and an enemy colony to gradually train the models. I particularly like this method
            as I believe that it doesn't overly bias the simulation. An easy fix would be to add reward for each stage of behaviours I would like the ants to learn, however, I would not be comfortable with being that
            intrusive on the simulation, and the produced results would have much less meaning. Curriculum learning is quite akin to the experience of ants in the growth of a natural colony, where they slowly expand their
            borders and face increasingly complex challenges. So far, this project has taught me an incredible amount about AI and DRL in particular, as well as instructing me in the many techniques to
            overcome common issues being faced. The complex, multi-agent problem has required me to learn and utilise a great many strategies to aid convergence, which has equipped me with vital tools for future projects.
            I am massively enjoying the process, and am looking forward to having a finished product!`,
        

        tags: [
            {name: "AI", id: 0},
            {name: "Modelling", id: 1},
            {name: "Biology", id: 2}
        ]
    },
    {
        id: 1, // Game Theory

        download: "/assets/images/projects/gameTheory/gameTheoryInvestigation.pdf",
        github: "https://github.com/JosephGrimshaw/gameTheory",

        alt2: "The Simulation Running",
        src2: "/assets/images/projects/gameTheory/simulation.png",
        width2: 1563,
        height2: 830,
        caption2: "The Simulation Running",

        p1: `This project uses a linear model to predict game theory in the form of the ultimate balance of behaviour strategies within a 
        species. One of my first large-scale projects, this taught me a great deal about both computer modelling and AI. 
        It is one of several AI projects which will soon be usable on my Aemilian company website, and I already have a UI developed
        for public use.`,

        p2: `I was inspired when my biology teacher lent me Richard Dawkins' book 'The Selfish Gene', which discusses 
            evolutionary biology and the mechanics which govern the natural world around us. The section on game theory particularly caught my eye,
            featuring John Keynes' Hawks/Doves model, proposed to model the behaviours of individual animals within a species and how that applied to
            natural selection. The model proposes two behavioural patterns; the hawks which always fight and the doves which never fight. Each turn, 
            the individuals are paired randomly in a simulated competition for food, and the outcome of the confrontation, decided by their 
            behavioural patterns, will yield certain numeric rewards for both. Dawkins stated that, given some set of numeric rewards, the population
            would fall into a specific Evolutionarily Stable Balance of hawks and doves. However, I was curious to see whether I could model this
            computationally on a large scale, and generate empirical results to back up Dawkins' claims.`,

        p3: `I first built
            the simulation in python using pygame and matplotlib for visual representation, followed by a scientific write-up
            to document my findings, linked under the title besides the code. I simulated 100000 total organisms, as, though I found that 1000 was
            sufficient to yield the patterns I found, I was conducting this as a scientific experiment and wanted to be as valid as possible. Based
            off of the initial configurations, in under 100 turns, the population would settle into some 
            ratio of hawks to doves where every individual earns an equal average reward each turn, causing stability. This aligned with
            Dawkins' predictions. Indeed, he provides a certain set of rewards and expected ratio of hawks to doves, and when I tested
            these values, the same ratio was reached. I presented this simulation to various teachers at school as well as my IT class, before
            moving on to other things.`,
        p4: `However, after learning pyTorch several months later, I decided to revisit the project and attempt to model it using a linear model.
            This was one of my first experiences building my own AI, and the struggles I faced when training it were invaluable for the development
            of my AI skills. First, I refactored the initial simulation, removing all visuals and limiting the simulation to output only the fraction
            of the population that were hawks after 500 turns. I then automated and ran it, entering into a csv file each of 50,000 runs with randomly
            initialised reward values. Then, I built a linear model, as the output was to be a continuous value, and used the suitable SGD optimiser
            and MSE loss function. The structure of the neural network taught me much about the learning process. Initially, I was lost
            as to how many neurones and hidden layers to include, but found a website which, in my case, advised 3 neurones in one hidden layer.
            However, when I tried this, the model was achieving extremely high loss, and was highly inaccurate after training. The model had most
            definitely been underfit. So, I scaled the network to have 3 hidden layers with 16 neurones, and a much higher accuracy of a few percent
            difference in values was achieved. However, in subsequent research, I discovered a tool which I still use frequently, called Optuna. This
            allowed me to automate testing of different setups of learning rates, batch sizes, momentum and more, and view which combination resulted
            in the lowest test loss. Furthermore, I discovered that I could apply this to the number, and size, of hidden layers, as well as dropout rates
            which I implemented to avoid overfitting in the more complex model. I found the ReLU activation function yielded the best results. 
            Ultimately, I was able to produce a much more accurate model, mostly functioning within 1% accuracy.`,
        p5: `I loved undertaking both aspects of this project, and it served as a springboard for me to begin experimenting with more complex programs,
            as well as easing me in to the wonderful world of AI. I also greatly enjoyed the book which inspired it, 'The Selfish Gene', which I found
            fascinating, and I am exceptionally grateful to my biology teacher for providing me with such an incredible piece of literature.`,
        tags: [
            {name: "AI", id: 0},
            {name: "Modelling", id: 1},
            {name: "Biology", id: 2}
        ]
    },
    {
        id: 2,

        github: "https://github.com/JosephGrimshaw/fireDetector",

        src1: "/assets/images/projects/fireDetector/robust.png",
        alt1: "The AI is Robust",
        width1: 1309,
        height1: 708,
        caption1: "Correct Prediction Despite Bright Light",

        src2: "/assets/images/projects/fireDetector/prediction.png",
        alt2: "Correct Prediction",
        width2: 1258,
        height2: 711,
        caption2: "Correct Prediction",

        p1: `In this project, I built a CNN which predicts whether any given image contains fire or not. It was my first solo computer vision project,
            and it was extremely useful in developing my knowledge of the processes and best practices within the field. It is also one of the several
            AI-related projects which will soon be run on my Aemilian company website.`,

        p2: `After completing two pyTorch MOOCs, I began to look for projects to undertake to practice my newly-gained skills. As I scrolled through
            Kaggle datasets for ideas, I encountered one of images of natural landscapes with and without fires, and I decided to build a model to
            categorise the data. I hugely enjoyed the project, not least because I was finally able to use the skills I had been fine-tuning
            to do something that could actually make a difference in the world, protecting forests, people, buildings and so much more from fires.`,
        
        p3: `From the pyTorch courses I had taken, I knew that this would be a problem for a CNN. However, I had not had extensive practice processing
            image datasets for this purpose. So, I took to the web and found a guide to the general processes and steps that were required. Frankly,
            the data processing was certainly the most challenging aspect of this project. For starters, the images were grouped via classification,
            and not named in any meaningful way. So, I created a script to build a csv from them with each image labelled, a format which I had experience working with using pandas.
            Then, I found that some images in the dataset were corrupted, so
            I had to sift through and remove those images. I would have used some approach such as averaging or copying to ensure no bias, but the
            dataset numbered in the thousands of images, and so I concluded that deleting a few would not greatly bias the model. After this, the
            images were still all different sizes, so I had to implement a random crop to a size smaller than all images in my transforms. Now, the
            error came from a difference in the number of channels in the images, so I added an RGB conversion to the dataset. Finally, I found the
            mean and std, a concept that I had to learn on Khan Academy, and normalised the images before converting them to tensors in the transforms.
            Finally, the data was ready to be processed!`,

        p4: `To maximise accuracy, I used the popular Resnet18 model, which I had dealt with in the pyTorch course I undertook. Initially, I made sure to
            lock the weights of the existing layers to prevent the already trained neurones from being affected. I changed the output layer to be 2
            neurones, as this was a classification problem with 2 possible outputs. I used SGD and CrossEntropyLoss, the latter due to the classification
            nature of the problem. By this point, I was familiar with Optuna, a module for randomly testing different combinations of hyperparameters
            to find the best combination which maximises accuracy. So, I linked the model to my CUDA and left Optuna to do its work and find the best
            batch size, learning rate, momentum and weight decay. However, I was experiencing rather poor accuracies of around 90% at most. I didn't want
            to mess with the structure of the model too much, and overfitting was likely not the problem, so I tried removing the locking of the hidden
            resnet layers' gradients. The next day, Optuna gave me a combination that yielded over 98% accuracy, which I was overjoyed with. Once I had
            trained the model, I saved it and uploaded it to my Aemilian website, which is currently in development, and implemented user image uploads.`,

        p5: `I am very proud of this project as it was my first attempt at computer vision, and I managed to produce a fairly accurate end product. Though
            it can very rarely struggle with very bright lights and other such hurdles, in my testing experience with various unrelated images, it displayed
            an accuracy which greatly impressed me. Overall, I learned much about image processing and the complexity of data handling with computer vision.
            In my naivity, I had always imagined the main work to be the designing of the models, but this taught me that that is not the only large source of
            workload. I was very pleased to have been able to apply AI to real-world problems, and, in the future, I may experiment with offering the model
            as a service, automating it and linking it to some real-world camera in, for example, a large forest. However, I would likely rebuild the AI before
            this point so as not to flood the poor fire-watcher's phone with alerts!`,

        tags: [
            {name: "AI", id: 0},
            {name: "Computer Vision", id: 1}
        ]
    },
    {
        id: 3,

        src1: "/assets/images/projects/portfolio/homePage.png",
        alt1: "Home Page",
        caption1: "Home Page of Website",
        width1: 1280,
        height1: 853,

        p1: `If you are reading this, it is likely that you are already familiar with this project! However, here I will give a brief overview of the development process and
            how I worked with React to mould a bootstrap for a commerce product into what you see here today.`,
        
        p2: `Initially, I was planning to build the site from scratch, as I have fairly extensive experience with React, and I still have several prototypes I built,
            one even featuring JWT-token authentication and an account system. However, with the onslaught of school and a newfound interest in AI, I decided that my
            time was better spent educating myself in the domain of AI, and so abandoned this plan. However, I still wanted to use the skills I had to build the site,
            so I found a bootstrap with a React JS framework. However, the development process was not completely smooth.`,

        p3: `Firstly, the bootstrap contained an abundance of files, with at least 5 versions of every page. Furthermore, it was a template intended for a business product,
            so many pages were irrelevant. After deciding on which pages I was to include, I amended the file structure and deleted any unneccessary data to clear my workspace.
            Next, I began filling in the site with the relevant data. However, this was not straightforward as many buttons and features lacked functionality, and I had to change
            many data structures to suit my needs. Particularly, I found myself constantly implementing maps, sometimes completely rebuilding the structure of a page. I found the
            process of deciding what information to add to be a very useful excercise in data selection. I am very proud of the website in its current form, and I am glad that I decided
            to build it using React as I was able to utilise skills which I had not had much opportunity to use. Also, I built the website in parallel with my antSim AI project and, sometimes,
            a good bit of mindless data-filling can be a nice break from the shenanigans of reinforcement learning agents!`,
        tags: [
            {name: "Web Development", id: 0},
            {name: "React", id: 1}
        ]
    }
]