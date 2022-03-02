# Rails.application.config.session_store :cookie_store, {
#   :key => 'BuddyUp',
#   :domain => :all,
#   :same_site => :none,
#   :secure => :true,
#   :tld_length => 2
# }

# if Rails.env === 'production' 
#   Rails.application.config.session_store :cookie_store, key: '_BuddyUp', domain: 'your-frontend-domain'
# else
#   Rails.application.config.session_store :cookie_store, key: '_BuddyUp' 
# end

Rails.application.config.session_store :cookie_store, key: "_BuddyUp_app", domain: "https://localhost:3001"
